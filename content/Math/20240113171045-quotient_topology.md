---
title: quotient topology
draft: false
tags:
  - definition
---
# quotient topology

# Definition
For any [[20231220133911-topology|topological space]] X and a set A with a *surjective* map $f:X \to A$.
There is a unique topology on A for which f is a [[20240113165510-quotient_map|quotient map]], this topology is called the quotient topology

# Notes
Usually, this definition is useless, so instead we use to it *build* topologies.
Given a topological space X and a set A with a surjective map $f:X \to A$, a subset $U \subset A$ is open in the quotient topology if $f^{-1}(U) \subset X$ is open.

Or in other words, to get an open set in $A$, take one $U \subset X$ and 
$$ f(U) \subseteq A $$
must be open in the quotient topology. 

## Geometric craziness
This is especially useful to build some geometric shapes from known topological spaces such as:
- [[20240113171559-torus|torus]]
