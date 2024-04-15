---
title: probability space
draft: false
---
# probability space
#definition

A probability space is simply a [[20240108112059-measure_space|measure space]] $(\Omega, \mathcal{F}, P)$ where the measure $P:\mathcal{F} \to \mathbb{R}$ of the whole space is one (i.e. $P(\Omega) = 1$.)

- $\Omega$ (the set) is the sample space
- $A \in \mathcal{F}$ is called an event
- $P(A)$ (the measure) is called the probability of A.


# Notes:
This captures a lot of intuition about probability.

- Notice that $P(A) \geq 0$ by the definition of measure.
- Disjoint additivity holds... so having more things that are considered a success for an event will increase the probability.
- Every event's complement is in the $\sigma$ -algebra and $P(A^c) = 1 - P(A)$
