# 读react文档

1. react始终在想我们传输一个概念immutable.将和他类比电影中某时刻的一帧。react中components和elements都不可变

1. 正确使用state,注意一下几点:

    - 用 `setState({})` 更新组件状态,直接去操作属性不会重新render

    - states 更新可能是异步的。为了优化性能，react内部会批处理多个setState调用成一次update。

    - setState方法除了接受一个对象外，还可以接受一个callback。

    - 调用setState()方法,会合并你传入的对象，和当前状态对象(浅拷贝)

1. 事件处理

    当用es6的class语法时,需要在事件回调函数中自己绑定this

1. 列表list中key

    key的作用是帮助React辨别哪些条目发生了改变、删除、增加。不推荐使用列表的索引，影响性能。

1. 控制组件和非受控制组件

1. 组件之间的通信,通过提升组件state(lift state up)找到他们共同祖先组件，由祖先组件向下传递数据，子组件通过props获得值

1. 组合 vs 继承,相比如继承，组合更灵活

1. 构建app应用的步骤(参考官网think in  react)

    - 拆分组建

    - 构建静态版本。。。
1. 获取组件的引用，给组建set  ref属性

1. 性能优化

    在新能优化中提到的一个很重要的手段，就是不改变旧数据，而是返回一个新的数据（或者用immutable库），
    这样能让react追踪对象是否变化更容易，提升性能

    diff算法

1. context(谨慎用context，用不好容易引起bug)

    1. 如果不想值沿着组建tree一层层，向下传递或者又不向沿用redux、flux等状态管理库，可以试着用context。它可以携带state。组件tree可以在context中访问到他.

    1. context携带数据有个问题。当携带state信息时，并且媒介组件继承purecomponent或者添加了shouldComponentupdate方法return false时，子组件中的context不会发生变化(引起bug)。

    理想的context使用方式是传递不改变的值，作为依赖注入到子组件中
    例如 LoginContext组件(改变color的值,LoginContext组件不会重新渲染)。

    ## 改变context中携带state数据，后代组建rerender的solution:

    让数据变成stateful，当state改变的时候，通知组建中rerender。(发布订阅模式)

    为了减少模版代码，有封装好的库可以解决这个问题如



参考  [How to safely use React context](https://medium.com/@mweststrate/how-to-safely-use-react-context-b7e343eff076)

1. API reference

    render() 保持render为pure function

    constructor()

    shouldComponentUpdate()

    setState()

    forceUpdate()


    dangerouslySetInnerHtml()

    合成事件

    动画插件

    ReactTransitionGroup
    ReactCssTransitionGroup

    新能分析插件



