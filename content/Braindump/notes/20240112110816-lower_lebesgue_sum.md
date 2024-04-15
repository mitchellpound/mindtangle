---
title: lower Lebesgue sum
draft: false
tags:
  - definition
---
# lower Lebesgue sum

# Overview
An important part of how to integrate a function. Closely related to the [[20240112110909-riemann_lower_upper_sum|Riemann lower/ upper sum]].

# Definition
For a measure space $(X, \mathcal{S}, \mu)$, and a [[20231218115927-measureable_function|measureable function]] $f:X \to [0, \infty]$, and a (measurable) partition, the lower Lebesgue sum

$$\mathcal{L}(f,P) = \sum_{j=1}^m \mu(A_j)\inf_{A_j} f$$

# Notes
This is technically only defined for positive functions (since the infimum doesn't play well functions that go to $-\infty$).
However, we can still take the sum of the negative parts of a function by taking the negative of the sum of the absolute value of the negative parts (better explained in the [[20240112111953-lebesgue_integral|Lebesgue integral]] note)
