---
title: not Lebesgue integrable function
draft: false
---
# not Lebesgue integrable function

An example of a function that is not [[20240120122921-lebesgue_integrability|Lebesgue integrable]] but is [[20240119205910-riemann_integrability|Riemann integrable]] is

$$f(x) = \frac{\sin x}{x}$$

This is because in the [[20240112111953-lebesgue_integral|Lebesgue integral]],

$$\int f^+ \ d\mu = \infty \ \text{and} \ \int f^- \ d\mu = \infty $$

where $\mu$ is the [[20231219170539-lebesgue_measure|Lebesgue measure]].

The [[20240119204735-riemann_integral|Riemann integral]] doesn't have this problem since the function alternates so some of the negative portion "cancels out" some of the positive ones from earlier partition intervals.
Thus,

$$\int \frac{\sin x}{x}\  dx  = \frac{\pi}{2}$$
