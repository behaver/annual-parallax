# AnnualParallax

[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](#) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/@behaver/annual-parallax) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

## 简介

AnnualParallax 是一个用于计算天体周年光行差的组件。

本组件计算支持的坐标系统有：赤道坐标和黄道坐标，计算结果的历元标准为 J2000 历元，单位为：弧度。

## 安装

通过 npm 安装，在你的 node 项目目录下执行：

`npm i --save @behaver/annual-parallax`

安装完成后，调用即可：

`const AnnualParallax = require('@behaver/annual-parallax');`

## 用例

```js
const AnnualParallax = require('@behaver/annual-parallax');
const { JDateRepository } = require("@behaver/jdate");
const { SphericalCoordinate3D } = require('@behaver/coordinate');

let AP = new AnnualParallax({
  time: new JDateRepository(18, 'j2000'),
  sc: new SphericalCoordinate3D(230043, 1.123, 1.55),
  system: 'ecliptic',
});

let res = AP.get();
```

## API

`constructor(options)`

构造函数:

* options.time   计算时间
* options.sc     天体球坐标 (距离单位：AU)
* options.system 坐标系统

`get()`

获取 周年视差修正值对象

`get time()`

获取计算时间

`set time(time)`

设置计算时间

## 许可证书

The MIT license.