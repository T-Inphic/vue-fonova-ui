# fonova-ui

> a fonova frame for ui

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
# fsui框架说明  
## 目录结构  
{  
    items: '各个项目的组件（页面级组件，即模块组件），目的是为了快速开发，下面每个子文件夹代表一个项目模块组件',  
    lib: '打包后文件用于发布到npm',  
    packages: '单个组件（eg：日历组件，按钮组件...）',  
    src: {  
        itemsModules: '该文件是对items文件内部的引用，用于安装组件',  
    }  
}  

# 发布组件到npm
1、npm run build  
2、切换分支至publish  
3、如果使用了淘宝镜像源 npm config set registry https://registry.npmjs.org/  
4、npm adduser  
5、npm publish  
6、发布成功后修改为淘宝镜像源 npm config set registry https://registry.npm.taobao.org  

# UI框架说明  
1、UI框架基于375设计稿 && fontSize="100px"  
