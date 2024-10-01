---
title: Riemann lower/ upper sum
draft: false
tags:
  - definition
---
# Riemann lower/ upper sum

# Overview
Can be seen as an approximation to the integral of a function.
Works by cutting the integral up into finite small pieces and making a square under the function's graph.

# Definition
Lower sum:
$$L(f, P) = \sum_{i=1}^n (x_{i} - x_{i-1}) \inf_{[x_{i-1}, x_i]}f  $$

Upper sum:
$$U(f, P) = \sum_{i=1}^n (x_{i} - x_{i-1}) \sup_{[x_{i-1}, x_i]}f  $$

Note that the upper sum will always be an over estimation of the integral and the lower sum will always be an under estimation.

The lower Riemann integral is
$$\int_{\_} f = \sup_P L(f, P)$$

and the upper Riemann integral is
$$\int^{\_} f = \inf_P U(f, P)$$
