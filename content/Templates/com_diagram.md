```tikz
\usepackage{tikz-cd}
\usepackage{amsmath}

\tikzcdset{scale cd/.style={every label/.append style={scale=#1},
    cells={nodes={scale=#1}}}}
	
\begin{document}
\begin{tikzcd}[scale cd=2, sep=huge]
A \arrow[r] & B

\end{tikzcd}

\end{document}
```
