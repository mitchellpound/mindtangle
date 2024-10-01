import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"
import path from "path"
import fs from "fs"

// Change in Markdown syntax tree from codeblock to script tag
export const TikzTransformer: QuartzTransformerPlugin = () => {
  return {
    name: 'TikzTransformer',
    markdownPlugins() {
      return [() => {
        return (tree, file) => {
          visit(tree, 'code', (node) => {
            if (node.lang === 'tikz') {
              // Clean up Latex code
              const remove = "&nbsp;";
              node.value = node.value.replaceAll(remove, "");

              let lines = node.value.split("\n");

              // Trim whitespace that is inserted when pasting in code, otherwise TikZJax complains
              lines = lines.map(line => line.trim());

              // Remove empty lines
              lines = lines.filter(line => line);

              node.value = lines.join("\n");
              node.type = 'html';
              node.value = `<script type="text/tikz"'>${node.value}</script>`;
            }
          });
        };
      }];
    },
    htmlPlugins() {
      return [
        () => {
          return (tree, file) => {
            // -------------------------------------------------------------------------------------------
            const findContentDirectory = (startDir: string): string | null => {
              let currentDir = startDir;

              // Traverse up the directory tree until the 'content' folder is found
              while (currentDir !== path.parse(currentDir).root) {
                const contentPath = path.join(currentDir, 'content');

                if (fs.existsSync(contentPath)) {
                  return contentPath;
                }

                // Move up one directory level
                currentDir = path.resolve(currentDir, '..');
              }

              console.error("Unable to find 'content' directory.");
              return null;
            }; 
            // Resolve the directory path of the current file and find the 'content' directory
            const fileDir = path.dirname(file.path);
            const contentDir = findContentDirectory(fileDir);
            
            if (!contentDir) {
              throw new Error("Unable to find 'content' directory.");
            }

            // Determine the relative path from the file's directory to the 'content' directory
            const relativePathToContent = path.relative(fileDir, contentDir);

            // Use the 'content' directory as the base to find the 'static' directory
            const relativePathToStatic = path.join(relativePathToContent, '../static');

            // Change node to include raw HTML before parsing to JSX
            visit(tree, "element", (node, index, parent) => {
              if (node.tagName === "script" && node.properties?.type === "text/tikz") {
                  const divNode = {
                    type: 'element',
                    tagName: 'div',
                    properties: { dangerouslySetInnerHTML: { __html: '<script type="text/tikz">'.concat(node.children[0].value, '</script>')} },
                    children: []
                  };
                  parent.children[index] = divNode
              }
            }) 

            // Add the TikZJax stylesheet and script tag to the head
            tree.children.unshift({
              type: 'element',
              tagName: 'script',
              properties: {
                src: `${relativePathToStatic}/tikzjax.js`
              },
              children: [],
            });
            tree.children.unshift({
              type: 'element',
              tagName: 'link',
              properties: {
                rel: 'stylesheet',
                type: 'text/css',
                href: `${relativePathToStatic}/fonts.css`,
              },
              children: [],
            });
          };
        },
      ];
    },
  };
}; 