
------
### 一、服务启动
_npm scripts 扩展可配置项_
* npm run dev  开发环境构建［，详情说明……］
* npm run build 发布环境构建［，详情说明……］
* npm run eslint 代码格式校验［，详情说明……］

### 二、[目录结构](http://naotu.baidu.com/file/4f961fe935b07d7bd5882304a8a85453)
**目录结构**  开发目录 **src** 介绍 —— ：
> * components 基础组件 + 布局组件 + 页面模块组件 （ 应用级别 & 模块级别）
> * pages 页面组件 （应用级别 & 页面级别）
> * routers 路由控制 （应用级别 & 页面级别）
> * store  数据状态控制 公共数据状态＋业务模块 （应用级别  & 模块级别）
> * styles  基础样式、公共样式  （架构级别）
> * scripts 公共脚本库  （架构级别）

### 三、开发标准
#### 3.1 组件标准 components、 pages

* [x] 支持less文件
- [x] 支持postcss
- [x] 支持ES6

**新增组件** 创建componentNew组件文件夹，文件夹下新增文件要求如下：
> * index.vue  组件html结构 ［js］有样式必须创建样式文件
> * base.js   组件脚本控制 ［~］脚本可放在.vue或抽离因别名限制不可用index
> * index.less 组件样式  没有样式控制可省略。

_示例：列表组件_
```
  --- list
      --- index.vue index.less base.js
```
**拓展组件** componentExtend组件文件夹，新增模版extendName, 文件要求如下
_示例：列表组件 扩展type1 (即：extendName)_
```
  --- list
      --- index.vue index.less base.js
      --- type1.vue type1.less type1.js
```

### 二、服务配置 - 进阶
  waiting to be perfect……
