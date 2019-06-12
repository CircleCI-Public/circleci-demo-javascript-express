### [2.0.1](https://github.com/estools/espurify/releases/tag/v2.0.1) (2019-02-15)


#### Bug Fixes

* [Fix cloning when the same object instance is referenced from multiple nodes (and introduce structural cloning)](https://github.com/estools/espurify/pull/13) by [@papandreou](https://github.com/papandreou)


## [2.0.0](https://github.com/estools/espurify/releases/tag/v2.0.0) (2018-11-23)


#### Breaking Changes

* [Remove core-js dependency](https://github.com/estools/espurify/pull/12) by [@goto-bus-stop](https://github.com/goto-bus-stop)

We drop support of ancient (= before ES6) environments. Please use polyfills by your own.

* [Drop support for prebuilt bundle and bower](https://github.com/estools/espurify/commit/266670edb6249ec2316265bd1845515c1de5f344)

We stopped providing prebuilt bundle for browsers. Please build your own by your bundler. We also dropped bower support. Please use npm instead.


### [1.8.1](https://github.com/estools/espurify/releases/tag/v1.8.1) (2018-07-10)


#### Bug Fixes

* [Deal with circular references in AST](https://github.com/estools/espurify/pull/11)


## [1.8.0](https://github.com/estools/espurify/releases/tag/v1.8.0) (2018-05-10)


#### Features

* [Support ES2018 (i.e. async iteration statement: `for-await-of`)](https://github.com/estools/espurify/pull/10)


## [1.7.0](https://github.com/estools/espurify/releases/tag/v1.7.0) (2017-02-24)


#### Features

* [Support ES2017 types and properties](https://github.com/estools/espurify/pull/8)


### [1.6.1](https://github.com/estools/espurify/releases/tag/v1.6.1) (2017-02-13)


#### Bug Fixes

* fix property order of ConditionalExpression ([01c13ada](https://github.com/estools/espurify/commit/01c13adac4ab304c9e5a50bc9bd16f60ad2e872b))


## [1.6.0](https://github.com/estools/espurify/releases/tag/v1.6.0) (2016-05-25)


#### Features

* [Consolidate ponyfills into core-js](https://github.com/estools/espurify/pull/6)


### [1.5.1](https://github.com/estools/espurify/releases/tag/v1.5.1) (2016-03-28)


### Performance Improvements

* [Improve AST clone performance](https://github.com/estools/espurify/pull/5)


## [1.5.0](https://github.com/estools/espurify/releases/tag/v1.5.0) (2015-12-21)


#### Features

* prepend `type` to whitelist if it does not exist ([af941315](https://github.com/estools/espurify/commit/af9413158f12af40cdbadf155c83ec681b3f60cb))


## [1.4.0](https://github.com/estools/espurify/releases/tag/v1.4.0) (2015-12-18)


#### Features

* [expose `cloneWithWhitelist` to deal with non-standard AST trees](https://github.com/estools/espurify/pull/4)


## [1.3.0](https://github.com/estools/espurify/releases/tag/v1.3.0) (2015-06-05)


#### Features

* add `delegate` to YieldExpression ([8ef733ed](https://github.com/estools/espurify/commit/8ef733edf15b49958265c1a866dd57802eda07c2))


## [1.2.0](https://github.com/estools/espurify/releases/tag/v1.2.0) (2015-04-17)


#### Features

* [performance optimization](https://github.com/estools/espurify/pull/1)


## [1.1.0](https://github.com/estools/espurify/releases/tag/v1.1.0) (2015-04-12)


#### Features

* switch to The ESTree Spec to support ES6 ([b9ca486e](https://github.com/estools/espurify/commit/b9ca486ed94f149e1f957ff7890899f171add03b))


#### Bug Fixes

* avoid cloning private (maybe recursive) props ([501b12bf](https://github.com/estools/espurify/commit/501b12bf86816ded4f5183a075a9d08da0ef22bf))


### [1.0.1](https://github.com/estools/espurify/releases/tag/v1.0.1) (2015-03-06)


* replace Array#indexOf with [indexof module](https://www.npmjs.com/package/indexof) to deal with older browsers ([4ba0bd51](https://github.com/estools/espurify/commit/4ba0bd5155ad657e4beb3338dfcd79e443e40d10))
* ship browser build with npm module too ([47e0cc85](https://github.com/estools/espurify/commit/47e0cc85a5d5b92b281ed80216d6908bed591515))


### Moved repository to estools (2014-11-24)


Moved repository from twada/espurify to estools/espurify.


### [1.0.0](https://github.com/estools/espurify/releases/tag/v1.0.0) (2014-11-01)


The first stable release.


### [0.1.3](https://github.com/estools/espurify/releases/tag/v0.1.3) (2014-08-01)


### [0.1.2](https://github.com/estools/espurify/releases/tag/v0.1.2) (2014-07-22)


### [0.1.1](https://github.com/estools/espurify/releases/tag/v0.1.1) (2014-07-22)


### [0.1.0](https://github.com/estools/espurify/releases/tag/v0.1.0) (2014-07-22)


The first release.
