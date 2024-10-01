---
title: Bayesian Model Comparison and Validation
draft: false
tags:
  - literature
---
# Bayesian Model Comparison and Validation
authors: John Geweke
year: 2007
[See in Zotero](zotero://select/items/@geweke2007)

# Literature Notes
# Overview
Much of stats literature advises using frequentist methodology to validate Bayesian model choice.
For example, after some data is collected, and a sufficient statistic is decided on, you can use the [[202306062133|posterior predictive density]] and check the quartiles/ p-value of the statistic of the data vs of the model.
However this treats probabilities of unobservable things as the metric to measure against. Plus, the posterior predictive density will add extra emphasis to the observed values.
This does not mean however that the observed values are the most likely to happen, which is often what is assumed in frequentist methods.

## Bayesian validation
Start with your complete set of models $A_1, \dots, A_n$ that have priors and defined likelyhoods. Then assume that there is some "incomplete" model meaning it is not specified with a prior/ likelyhood explicityly.
Choose some statistic/ function of the data $z_j(y)$ that is based on 'stylized facts' or theory behind the data. What the theory says the function 'should be' can be thought of as the function under the incomplete model - i.e $p(z_j|B_j)$
Then use the [[202306061642|predictive distribution]] and [[202306071300|Bayes Factor]] to give an idea of if the model $A_j$ is appropriate. If the factor is low, this may mean that the incomplete model with the function $z_j$ doesn't support the model $A_j$
