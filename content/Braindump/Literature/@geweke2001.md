---
title: Bayesian Specification Analysis in Econometrics
draft: false
tags:
  - literature
---

# Bayesian Specification Analysis in Econometrics
authors: John Geweke, William McCausland
year: 2001
[See in Zotero](zotero://select/items/@geweke2001)

# Literature Notes
## Overview
In order to decide between different models, you can use specification analysis to see how close certain parts of a model are to aspects of reality (the statistician must do decide what parts of reality to approximate - what is important).
First choose a 'vector of interest' ($\omega$) which is just some statistics/ function to be computed from the date (usually associated with some meaning or theory). Then use predictive specification or postpredictive specification.

## Predictive Specification
General question: Does the [[202306061642|predictive distribution]] (and $\omega$ given the predictive distribution) fit what you think it should given the model?

## Postpredictive Specification
General question: Does the [[202306062133|posterior predictive density]] (and $\omega$) fit the expectation given the model?

# Notes
- Complete model - Must be equiped with prior distribuiton for unobservables and likelihood function for observables. To use specification analysis you need to have a complete model.
- Specification analysis (especially checking with the predictive speficiation) is a good way to decide on which prior to use. Its especially interesting since it has an element of explicit subjectivity as different people would use different $\omega$ vectors.