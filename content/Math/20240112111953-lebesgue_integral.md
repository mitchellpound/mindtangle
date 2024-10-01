---
title: Lebesgue integral
draft: false
tags:
  - definition
---
# Lebesgue integral

# Overview
A way to "fix" the [[20240119204735-riemann_integral|Riemann integral]], which is not able to integrate some functions.
Instead of using partitions based on smaller closed intervals, it uses partitions of measurable sets.

# Definition
For a measure space $(X, \mathcal{S}, \mu)$, and a measurable function $f:X\to [0, \infty]$ the the Lebesgue integral (or integral with respect to a measure) is

$$
\int f d\mu = \sup\{\mathcal{L}(f, P) | \text{P is an} \ \mathcal{S} \text{-partition of X}\}
$$

Where $\mathcal{L}$ is the [[20240112110816-lower_lebesgue_sum|lower Lebesgue sum]] of $f$ on $P$.

# Notes about more general functions
Since the definition given only is defined for non-negative functions it would be pretty restrictive.
However, we can split the function f into the negative and positive parts, thus for a general function

$$
\int f d\mu = \int f^+ d\mu - \int |f^-| d\mu
$$

Also, the Lebesgue integral can be found using a process of [[20231229165411-approximation_by_simple_functions|approximation by simple functions]].

# Properties of Lebesgue integration
## Order preserving
## linear
## Absolute value
$$
\left| \int f d\mu \right| \leq \int |f| d\mu
$$

# Links
- [[20240120122921-lebesgue_integrability|Lebesgue integrability]]
- [[20240120162824-integral_leaks|integral leaks]]
