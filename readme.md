# react-router

## 绝对路由

使用绝对路由可以减少url的层级

如我们可以将 /inbox 从 /inbox/messages/:id 中去除，并且还能够让 Message 嵌套在 App -> Inbox 中渲染。


## 路由

1. html5中history,这种情况需要对server改造,避免直接请求服务器某个子路由或者刷新造成的bug

1. hash值类型的,带有#

1. app那种路由,在地址栏不会有陆游的变化

1. activeStyle  activeClassName 指定当前间获得LINK。嵌套路由中,如果根路径会一直处于激活状态(用Link导航),可以用IndexLink取代或者LINk添加`onlyActiveOnIndex={true}`属性

1. 组件外router跳转,通过history或者hashhistory跳转
    `hashHistory.push(path)`
    或者用context上下文提供的router跳转
    `this.context.router.push(path)`

## 高级特性

1. 动态路由

    路劲匹配和组件加载是异步完成的，可以用来延迟加载组件和路由配置，借助webpack工具，可以拆分bundle.

    可以在jsx中配置route,也可以用普通的javascript对象去设置路由。

1. 生命周期

    添加钩子`routerWillLeave`

1. 服务端渲染










