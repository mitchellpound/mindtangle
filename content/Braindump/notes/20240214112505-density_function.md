---
title: density function
draft: false
tags: 
  - definition
---
# density function
For a [[20240213222154-probability_space|probability space]] $(\Omega, \mathcal{F}, P)$ and a [[20240213222818-random_variable|random variable]] $X$ with a [[20240214111930-cumulative_distribution_function|cumulative distribution function]] $F_X$, if there exists a function $f: \mathbb{R} \to [0,1]$ such that

$$F_X = \int_{-\infty}^x f \ d\lambda $$

then $f$ is a density function of $X$.

# Notes
$$P(X = x) = \lim_{\epsilon \to 0} \int_{x - \epsilon}^{x + \epsilon} f \ d\lambda $$

- $f \geq 0 \ a.e$. because the cumulative distribution function is non-decreasing.
