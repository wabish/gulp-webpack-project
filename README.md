# gulp-webpack-project

## 本示例模板

这是一份帮助你学习 gulp + webpack 的项目示例代码。仅仅是一份参考，请根据自己的项目对其进行修改。

## 学习的前提

* 了解 gulp 是做什么用的；
* 了解 webpack 是做什么用的；
* 了解什么是前端项目的构建，什么是静态文件的打包。

## 构建目标

* 使用 ``gulp`` 对图片、css 文件进行打包；
* 使用 ``webpack`` 对 js 文件进行打包。

## 示例依赖

* gulp
* webpack
* sass

## 目录结构与说明

``` bash
├─ gulp/                                 # gulp配置目录
    ├─ tasks                             # 任务配置目录
        ├─ image.js                      # 图片配置
        ├─ other.js                      # 其它配置
        ├─ script.js                     # 脚本配置
        ├─ style.js                      # 样式配置
        └─ view.js                       # 页面配置
    ├─ gulp.config.js                    # gulp配置文件
    ├─ webpack.config.js                 # webpack开发配置文件
    └─ webpack.production.config.js      # webpack上线配置文件
├─ src/                                  # 开发目录
    ├─ html/                             # 存放html的目录
        ├─ app/                          # 可提取复用的页面模块
        └─ page/                         # 各页面入口文件
    ├─ images/                           # 存放图片的目录
        ├─ single/                       # 不需要合并的图片
        └─ sprite/                       # 需要合并的图片
    ├─ js/                               # 存放js的目录
        ├─ app/                          # 可提取复用的脚步模块
        └─ lib/                          # 第三方js库
    └─ sass/                             # 存放sass的目录
        ├─ app/                          # 可提取复用的样式模块
        └─ page/                         # 各页面入口样式文件
├─ gulpfile.js                           # gulp入口配置文件
└─ package.json                          # npm包管理文件
```

## 1. 安装 NPM

首先，别忘记安装 ``npm``，一切都是基于它之上进行玩转。

``` bash
$ npm install
```

## 2. 运行命令

输入 ``gulp help`` 可查看全部命令：

``` bash
# 开发监控，不监听js改动
  - gulp dev
  - gulp webpack

# 开发监控，监听js改动
  - gulp watch

# 开发监控，浏览器自动刷新，不监听js改动
  - gulp serve
  - gulp webpack

# 开发监控，浏览器自动刷新，监听js改动
  - gulp browser

# 打包上线
  - gulp build
```

运行开发命令：

``` bash
$ gulp watch
```

打包上线命令：

``` bash
$ gulp build
```

## 3. 查看源代码

了解该示例如何实现，并根据自身项目需求对其进行更改。
