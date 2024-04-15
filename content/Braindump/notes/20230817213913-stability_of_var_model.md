---
title: stability of VAR model
draft: false
tags:
  - definition
---
# stability of VAR model
#definition
The VAR model is stable if it generates [[202305211417|Stationary time series]] - all of them. This is a little intense to think about since each variable can depend on lags of other variables.

A VAR(p) is stable if the (modulus of the) eigenvalues of the coefficient matrix are less than 1. This works even for p > 1 since we can make an augmented matrix holding all the other matrices which is equivalent

$$ A_{aug} = \begin{bmatrix} A_1 & A_2 & \cdots & A_{p-1} & A_p \\
I & 0 & \cdots & 0 & 0 \\
0 & I & \cdots & 0 & 0 \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
0 & 0 & \cdots & I & 0
\end{bmatrix} $$
