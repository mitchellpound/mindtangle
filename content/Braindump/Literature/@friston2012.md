---
title: "Active inference and agency: optimal control without cost functions"
draft: false
tags:
  - literature
---

# Active inference and agency: optimal control without cost functions
authors: Karl Friston, Spyridon Samothrakis, Read Montague
year: 2012
[See in Zotero](zotero://select/items/@friston2012)

# Literature Notes
Active inference (AI) and control theory are different paradigms with subtle differences in what an agent knows in its environment. However, control theory optimizations can be recast as active inference. There is a duality, where control theory can be generalized as a special case of AI.

Control theory:
- actions maximize the expected reward in future **states**
- actions are chosen to get to states that will bring the optimal reward

Active Inference:
- actions minimize the variational free energy associated with **observations**
- actions are chosen to get "desired" observations that are most probable given the agent's generative probabilistic model $P(O,S,\theta|m)$ 

AI can be used in two ways: 
1. Agency free - the actions are modeled directly. Useful when you already 'know' the optimal path and want to model the agent carrying out actions. 
2. Agency-based - probabilistic representation of control is distinct (decoupled) from the actual actions. Controls are hidden states that can have probabilities assigned to them. Then, action can be taken based on a decision function of the control states. A way to model/ find the optimal solution

### Agency free:
In these models, the optimal solution is already known. The generative model for the agent can be set up to be a factorization using Markov transition probabilities for states. 

$$P(o,s,\theta|m) = P(o|s, \theta)P(s|\theta)P(\theta|m)$$

The optimal path can be encoded in the priors $P(\theta|m)$ such that the transition probabilities $P(s_{t+1}|s_t, \theta_\pi) = T(s_{t+1}|s_t, \pi(s_t))$ are the optimal transition probability that can be found using Bellman optimality equation. 

### Agency-based:
Can be used to find the optimal solution. The control states for the future influence the current hidden states. This means the problem can be solved 'backwards'. A _goal_ prior for the desired terminal state and a prior control cost (probabilistic cost to transfer control states) are given. These together make the generative model for the organism, which will solve it by minimizing free energy and approximating the posteriors - all which can be done with Bayesian approximation algorithms. 

### Important notes:
-Optimal control may be faster/ easier way to get an optimal path. 
-Since the free energy equation is not convex then there is not a guarantee that the optimization algorithms will find a global minimum for free energy
-The 'equilibrium' is not unique. There may be other sets of priors and costs that correspond to the same decisions. 
-Though imperfect, this version of getting an optimal path was able to handle high levels of complexity - select from massive numbers of possible decision sequences. 

