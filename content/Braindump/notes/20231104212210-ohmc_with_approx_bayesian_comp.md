---
title: OHMC with Approx Bayesian Comp
draft: false
---
# OHMC with Approx Bayesian Comp

In order to get a working subjective distribution to use with [[20231102214208-subjective_ohmc|Subjective OHMC]], use [[20231104210839-approximate_bayesian_computation_abc|Approximate Bayesian Computation (ABC)]].
This has the added benefit of having unknown data loss if an insufficient statistic is used for matching ([[@robert2011]]).
Though this wouldn't seem like a benefit, it is a feature not a bug. Most agents in an economy are working off of insufficient statistics as well as an incomplete state space.
The unknown data loss can represent unknown data that is not incorporated into an agent's mental (subjective) model.
