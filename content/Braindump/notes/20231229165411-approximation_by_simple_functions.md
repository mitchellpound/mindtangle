---
title: approximation by simple functions
draft: false
---
# approximation by simple functions

# Overview
Any measurable function can be approximated "from below" by a [[20231218115927-measureable_function|measureable]] [[20231229165034-simple_function|simple function]].
This is nice since simple functions can be much easier to work with.

# Theorem (if you can call it that)
For any measurable function $f:X \to [-\infty, \infty]$ on a measurable space $(X, \mathcal{S})$, then there exists a sequence of measurable simple functions $f_1, f_2, \dots$ such that

1. $|f_k(x)| \leq |f_{k+1}(x)| \leq |f(x)|$ for all $k \in \mathbb{N}$ and all $x \in X$
   Or in other words, f is an 'increasing' sequence of functions.

2. $\lim_{k\to \infty} f_k(x) = f(x)$ for all $x \in X$

3. If f is bounded, then $f_1, f_2, \dots$ converges uniformly on X

## Proof
The general idea is that you can split the domain up into (a lot) of finitely intervals which get smaller and closer to having the actual function value.

First set bounds for the function. For a set $k \in \mathbb{Z}$.
Let $f_k(x) = k$ if $f(x) > k$ and $f_k(x) = -k$ if $f(x) < -k$

For anything else inside those bounds (of the domain) we split each interval into $2^k$ subintervals.
$f(x)$ is defined as the left endpoint of the subinterval of the domian that it is found in.

Formally this can be written as
$$
f(x) = \left\{ \begin{matrix} k & \text{if } f(x) > k \\
-k & \text{if } f(x) < -k  \\
\frac{m}{2^k} & f(x) \in [\frac{m}{2^k}, \frac{m+1}{2^k}) \quad m \in 1, 2, \dots k
\end{matrix} \right. 
$$
