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