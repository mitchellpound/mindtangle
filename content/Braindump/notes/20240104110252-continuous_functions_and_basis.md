---
title: continuous functions and basis
draft: false
---
# continuous functions and basis

Given a function $f:X \to Y$ on topological spaces $(X, \tau)$ and $(Y, \sigma)$ where $\mathcal{B}$ is a [[20231222084115-topological_basis|topological basis]] for $\sigma$, it is sufficient to check if f is a [[20231222091508-continuous_map|continuous map]] for all the basis elements $B\in \mathcal{B}$

In other words if
$$
f^{-1}(B) \in \tau \ \forall B \in \mathcal{B}
$$

then f is a continuous function.

# Proof
For any open set $U \subset X$ then
$$
U = \bigcup_\alpha B_\alpha
$$
Therefore,
$$
f^{-1}(U) = \bigcup_\alpha f^{-1}(B_\alpha)
$$

So if all $f^{-1}(B)$ are open then $f^{-1}(U)$ is open
