---
title: $\sigma$-algebra closed under countable intersection
draft: false
mathLink: $\sigma$-algebra closed under countable intersection
---
# $\sigma$-algebra closed under countable intersection
#theorem

A [[20231205121417-sigma_algebra]] is closed under countable intersection because of [[20231218112351-de_morgan_s_law|De Morgan's law]]. 

# Proof
For a $\sigma$-algebra $\mathcal{S}$ and sets $A, B \in \mathcal{S}$

$$
\begin{align*}
A \cap B &= ((A \cap B)^C)^C\\
&= (A^C \cup B^C)^C \in \mathcal{S}
\end{align*}
$$

The last line is because the $\sigma$-algebra is closed under union and complement. 