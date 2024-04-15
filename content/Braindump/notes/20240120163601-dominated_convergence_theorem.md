---
title: dominated convergence theorem
draft: false
---
# dominated convergence theorem

Dominated convergence theorem is a way to tell if an [[20240120162824-integral_leaks|integral leaks]] or not.
Or put informally, if we can move limits inside of integrals.
It's one of the biggest, baddest theorems in measure theory and is used a lot.

# Theorem
For a measure space $(X, \mathcal{S}, \mu)$ and measurable function $f:X \to [-\infty, \infty]$ along with the a sequence of measurable functions $f_1, f_2, \dots: X \to [-\infty, \infty]$ such that
$$\lim_{k\to \infty} f_k(x) = f(x) \ a.e. $$

If there exists a measurable function $g:X \to [0, \infty]$ such that

$$\int g  \ d\mu < \infty \ \text{ and  } \ |f_k(x)| \leq g(x) \ a.e.  \quad \forall k \in \mathbb{N}, $$

then

$$\lim_{k\to \infty} \int f_k \ d\mu = \int f \ d\mu = \int \lim_{k\to \infty} f_k \ d\mu $$

## Proof
Suppose the measurable function $g:X \to [0, \infty]$ satisfies the hypotheses.
For a set $E \in \mathcal{S}$,
$$\begin{align*}
 \left| \int f_k \ d\mu - \int f \ d\mu \right| & = \left| \int_{X\backslash E} f_k \ d\mu + \int_{E} f_k \ d\mu - \int_{X\backslash E} f \ d\mu - \int_{E} f \ d\mu \right| & \\
& \leq \left| \int_{X\backslash E} f_k \ d\mu \right| + \left| \int_{X\backslash E} f \ d\mu \right| + \left| \int_E f_k \ d\mu - \int_E f \ d\mu \right| & \text{Triangle inequality}\\
& \leq 2 \int_{X \backslash E} g \ d\mu + \left| \int_E f_k \ d\mu - \int_E f \ d\mu \right| &
\end{align*}$$

The last line comes because $g$ dominates $f_k$ and $f$, so the integral must be larger.

Now there are two cases, the first where the total measure is finite ($\mu(X) < \infty$) and where the total measure is infinte.

### Case 1:* Suppose $\mu(X) < \infty$.
Let $\epsilon > 0$. We know there exits $\delta > 0$ such that
$$ \int_B g \ d\mu < \frac{\epsilon}{4} $$
for every $B$ such that $\mu(B) < \delta$.
This comes because if we shrink down the region that is being integrated over, it must eventually make the integral small enough.

Using this same $\delta$, by [[20240108111329-egorov_s_theorem|Egorov's Theorem]], we know that we can find a set $E$ such that $\mu(X \backslash E) < \delta$ such that $\{ f_k \}^\infty$ converges uniformly to $f$.

So putting this together from the above
$$\left| \int f_k \ d\mu - \int f \ d\mu \right| \leq 2 \int_{X \backslash E} g \ d\mu + \left| \int_E f_k \ d\mu - \int_E f \ d\mu \right| \leq \frac{2\epsilon}{4} + \left| \int_E(f_k - f) \ d\mu \right|. $$

Becuase $\{f_k\} \to f$ uniformly then we can always find a large enough k such that the last term is less than $\frac{\epsilon}{2}$.
Therefore, we have convergence.

### Case 2:* Suppose $\mu(X) = \infty$.
Then there exits a set $E \in \mathcal{S}$ such that $\mu(E) < \infty$ and
$$\int_{X \backslash E} g \ d\mu < \frac{\epsilon}{4}. $$

This comes from the fact that $\int g \ d\mu < \infty$, so over the whole space, it must take on relatively small values over most of the domain.
(This could be made more rigourous, but it also just makes sense).

By the above,

$$\left| \int f_k \ d\mu - \int f \ d\mu \right| \leq  \frac{2\epsilon}{4} + \left| \int_E(f_k - f) \ d\mu \right|. $$

Now $E$ is a set with finite measure, so we can use case 1 over that set.
Thus, for a big enough $k$ the last term is less than $\frac{\epsilon}{2}$ and we again have convergence.

This concludes the proof.