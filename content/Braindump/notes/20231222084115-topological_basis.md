---
title: topological basis
draft: false
tags:
  - definition
---
# topological basis
# Overview
Basis are usually an easier way to talk about a [[20231220133911-topology|topology]]
It gives us an easy way to compare topolgies

# Definition
For a set X with a topology $\tau$, a set of subsets of X (let it be $\mathcal{B}$) is a *basis* for $\tau$ if
1. $\forall x \in X, \exists B \in \mathcal{B}$ where $x \in B$
   Every element of X is covered by the basis
2. For 2 basis elements $B_1, B_2$ if $x \in B_1 \cap B_2$ then there is some basis element $B_3$ such that
   $$x \in B_3 \subset B_1 \cap B_2$$
   If x is in more than one basis, there is a third basis that is in the intersection (it is smaller than both of the original ones).
