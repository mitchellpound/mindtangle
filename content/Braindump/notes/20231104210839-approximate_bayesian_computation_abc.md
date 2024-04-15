---
title: Approximate Bayesian Computation (ABC)
draft: false
tags: 
  - algorithm
---
# Approximate Bayesian Computation (ABC)

# Motivation/ use
A way to use [[202306131050|simulation techniques]] to find the posterior distribution of a Bayesian model.
It is especially useful when the likelyhood function is very complex, or cannot be fully specified or sampled from. In this case, the general posterior simulation techniques will not work.

# Algorithm
1. From basically any distribution draw $\theta_0$
2. Using $\theta_0$, simulate data $\tilde{y}$.
3. Using a matching algorithm or summary statistic $\rho(y)$, check if $|\rho(\tilde{y}) - \rho(y^o)| < \epsilon$ where $\epsilon$ is a tolerance level. If it is, then keep the $\theta_0$ value, else reject it.
4. Repeat a lot.

# Resources
[[@rubin1984]]
