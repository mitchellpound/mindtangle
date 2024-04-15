---
title: bounded convergence theorem
draft: false
---
# bounded convergence theorem

The bounded convergence theorem is a special case of the [[20240120163601-dominated_convergence_theorem|dominated convergence theorem]], though it can be proved using slightly different techniques.

# Theorem
For a measure space $(X, \mathcal{S}, \mu)$ with $\mu < \infty$ (very important!), suppose there is a sequence of measurable functions $f_1, f_2, \cdots: X \to \mathbb{R}$ that converges pointwise to a function $f:X \to \mathbb{R}$.
If there exits $c\in (0, \infty)$ such that

$$|f_k(x)| \leq c\ \qquad \forall k \in \mathbb{Z}^+ \ \forall x \in X$$

then

$$\lim_{k\to\infty}\int f_k d\mu = \int \lim_{k\to\infty} f_k d\mu = \int f d\mu$$

Basically, if your function is on a finite measure space, and converges pointwise to a bounded function then the limit and the integral can be exchanged. 
(The [[20240120162824-integral_leaks|integral doesn't leak]]).

## Proof
This proof relies on [[20240108111329-egorov_s_theorem|Egorov's Theorem]], so we restrict the domain down to get uniform convergence while only cutting out an arbitrarily small set.

For $\epsilon > 0$ By Egorov's theorem, $\exists E \subset X$ such that $\mu(X \backslash E) < \frac{\epsilon}{4c}$ and $f_k \to f$ converges uniformly on $E$.

Using this set, we split the integral along this set

$$\begin{align*}
\left|\int f_k d\mu - \int f d\mu\right| & = \left|\int_{X\backslash E} f_k d\mu - \int_{x\backslash E} f d\mu + \int_E f_k d\mu - \int_E f d\mu\right| \\
& \leq \int_{x\backslash E} |f_k| \ d\mu + \int_{X\backslash E}|f| \ d\mu + \int_E |f_k - f| \ d\mu\\
& \leq \mu(X\backslash E)(\sup|f_k|+ \sup|f|) + \mu(E)\sup_E|f_k -f|\\
& \leq \frac{\epsilon}{4c}(2c) + \mu(E) \sup_E|f_k -f| < \epsilon
\end{align*}$$

The inequality on the last line holds because $f_k \to f$ uniformly so for k large, we can find the $\sup_E|f_k - f| < \frac{\epsilon}{2\mu(E)}$ for all $x \in E$

Thus, the limit doesn't leak and the limit can be interchange with the integral.
