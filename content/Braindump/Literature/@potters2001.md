---
title: Hedge your monte carlo
draft: false
tags:
  - literature
---

# Hedge your monte carlo
authors: Marc Potters, Jean-Philippe Bouchaud, Dragan Sestovic
year: 2001
[See in Zotero](zotero://select/items/@potters2001)

# Literature Notes

# Optimal Hedge Monte Carlo algorithm
1. Using a probability distribution (the authors say objective meaning to reflect actual returns not risk-neutral ones) draw out N price paths
2. On each price path, compute the payout at the final time step
3. On the second to last time step, define the option price as a linear combination of functions of the (current) spot price of the underlying asset.
   Thus, let $$C_k = \sum_{j=1}^M \gamma_{j,k} f_j(X)$$ and $$\phi_k(x) = \sum_{j=1}^M\varphi_{j,k}g_j(x)$$ where $C_k(x)$ is the option price at time k and $\phi_k(x)$ is the optimal hedge ratio.
   Note here that $f_j(x)$ and $g_j(x)$ are not dependent on k. They are basis functions for the function space we want to minimize over. We can solve for these by minimizing defined risk. Its also important to know that these are solved "backward" starting from the last time step since the option price at that time is known at excercise.
4. Look back over the time paths, if early excercise is an option, then find the points where early excercise is more than the calculated option price. Change the option price to the payout of early excercise and redo the process after that point.

# Notes
Though the authors say many times to use "objective" probabilities, the method is agnostic to the stochastic process used.
This differes from many other approaches by not assuming (or deriving under some assumptions) the hedging ratio. Instead, it is derived based on minimizing the assumed risk (by minimizing a defined loss function).