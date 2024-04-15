---
title: not Riemann integrable function
draft: false
---
# not Riemann integrable function

An example of a function that is not [[20240119205910-riemann_integrability|Riemann integrable]] but is [[20240120122921-lebesgue_integrability|Lebesgue integrable]] is the [[20240120124035-dirichlet_function|Dirichlet function]] (along the interval $[0,1]$)

It is not Riemann integrable since inside any interval in the partition of the domain, there will be both $x_0 \in \mathbb{Q}$ and $x_1 \in \mathbb{R}\backslash \mathbb{Q}$.
So, the [[20240112110909-riemann_lower_upper_sum|Riemann lower]] sum will be 0 and the upper sum will always be 1.

The [[20240112111953-lebesgue_integral|Lebesgue integral]] doesn't have any problems since the Dirichlet function is [[20240108113617-borel_measurable_function|Borel measurable function]].
In fact, it's a simple function, so its even easier to integrate.

$$ \int f d\mu = 1 \cdot \mu([0,1]\cap \mathbb{Q} ) + 0 \cdot \mu([0,1] \backslash \mathbb{Q}) = 1\cdot 0 + 0\cdot 1 = 0 $$
