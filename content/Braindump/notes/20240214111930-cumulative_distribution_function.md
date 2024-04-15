---
title: cumulative distribution function
draft: false
tags: 
  - definition
---
# cumulative distribution function
For a [[20240213222154-probability_space|probability space]]  $(\Omega, \mathcal{F}, P)$ and a [[20240213222818-random_variable|random variable]] $X:\Omega \to \mathbb{R}$ the cumulative distribution function is

$$F_X(x) = P(X \leq x) = P(X^{-1}(-\infty, x)) $$ 
using the [[20240214111633-distribution_of_random_variable|distribution of random variable]] $P(X)$. 

# Properties
- $F_X$ is non-decreasing
- $\lim_{x\to \infty} F_X(x) = 1$ and $\lim_{x \to -\infty} F_X(x) = 0$
- $F_X$ is right continuous.
