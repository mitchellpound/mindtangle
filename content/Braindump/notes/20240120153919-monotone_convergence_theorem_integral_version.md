---
title: monotone convergence theorem (integral version)
draft: false
---
# monotone convergence theorem (integral version)

This is a way to interchange the limit of an integral with the integral of the limit (under certain conditions, since that doesn't always work).

# Theorem
For a measure space $(X, \mathcal{S}, \mu)$ and $0\leq f_1 \leq f_2 \cdots$ is an increasing sequence of measurable functions, let $f:X \to [0,\infty]$ such that

$$f(x) = \lim_{k\to\infty} f_k(x) $$

Then

$$\lim_{k\to\infty} \int f_k d\mu = \int f d\mu = \int \lim_{k\to\infty} f_k(x) d\mu$$

## Proof
(Before anything else, we know that the function $f$ is measurable)

First, prove $\lim_{k\to\infty} \int f_k d\mu \leq \int f d\mu$.
Each $f_k \leq f$ thus since Lebesgue integral preserves order $\lim_{k\to\infty} \int f_k d\mu \leq \int f d\mu$.

Next, prove $\lim_{k\to\infty} \int f_k d\mu \geq \int f d\mu$.

We need a little space, so first let $0 \leq \phi \leq f$ be a simple measurable function.
$$\phi = \sum c_i \chi_{A_i} \qquad A_i \in \mathcal{S} \ \text{disjoint}$$

Choose $\alpha \in (0,1)$ and consider the set
$$E_k = \{x\in X| f_k(x) \geq \alpha \phi(x) \}$$

Since $f_k \leq f_{k+1}$ then $E_k \subseteq E_{k+1}$ so it's an increasing sequence of sets and $\cup E_k = X$ since we "shrank" the function so $\alpha \phi(x) \leq f$.

So we use these constructed sets $E_k$ along with the sets $A_i$ from $\phi$.

$$A_i = X \cap A_i = \bigcup_{k=1}^\infty(E_k \cap A_i)$$

This lets us use these in $\phi$


$$\begin{split}

f_k \geq f_k \chi_{E_k} \geq \alpha \phi \chi_{E_k} & = \alpha \sum c_i\chi_{A_i}\chi_{E_k}\\
 & = \alpha \sum c_i\chi_{A_i} \cap E_k
\end{split}$$

We need these $E_k$ which is an increasing sequence of sets to move the limit inside the measure.
Integrating the above gives
$$\begin{equation} \int f_k \geq \int \alpha \sum c_i\chi_{A_i \cap E_k} = \alpha \sum c_i\mu(A_i \cap E_k) \end{equation}$$

By the continuity of measure, along with the sets $E_k$

$$\mu(A_i) = \mu(\lim_{k\to\infty}(E_k \cap A_i)) = \lim_{k\to\infty} \mu(E_k \cap A_i)$$

So the limit plays nice in equation (1), so we take the limit,
$$\begin{equation} \lim_{k\to\infty} \int f_k \geq \lim_{k\to\infty} \alpha \sum c_i\mu(A_i \cap E_k) = \alpha \sum c_i\mu(A_i) \end{equation}$$

Now take the supremum over all the partitions (aka let the simple function become a better and better approximation)

$$\lim_{k\to\infty} \int f_k \geq \alpha \sup_{0\leq\phi\leq f}\int \phi d\mu = \alpha \int f d\mu $$

Then just let $\alpha$ get arbitrarily close to 1.
And with that we have both sides so
$$\lim_{k\to\infty} \int f_k d\mu = \int \lim_{k\to\infty} f_k d\mu$$

