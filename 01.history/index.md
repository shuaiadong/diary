# history
> 1. 什么是history?
> 2. 有那些api、methods?
> 3. 那些应用场景？
- 易忘知识点
- **history.pushState 和 history.replaceState 不会触发 onpopstate**

# 1. history(栈形结构)
history是window的上的对象,是一个**只读属性**,提供了操作浏览器会话历史的接口（不能清空、只能通过replacet替换）？

# 2.1 api
- length 浏览历史的长度
- scrollRestoration '兼容性问题 ie 安卓'
    - params
        - 'auto' default
        - 'manual'
- state 返回**当前**历史页面的state (为pushState, replaceState 传入的值)
   - null (default)
# 2.2 method
- back 向后退
    - 无参数

- forward 向前进
    - 无参数

- go
    - string | number
    <= -1 后退
    = 0 | 无参数  =>  刷新页面
    >= 1 前进
- pushState 将数据push到会话历史栈
    data: any
    title: 已废弃
    url?: string 默认调用toString
- relpaceState 替换当前历史
    data: any
    title: 已废弃
    url?: string 默认调用toString


- onpopstate
**history.pushState 和 history.replaceState 不会触发 onpopstate** 
**hash 变化会触发popState**
- IE10 and IE11 不支持
 IE 11在popstate上无法正常使用，所以，需要使用老方法hashchange。有一个叫History.js的library，是可以解决这个问题。但如果url在"#"后跟了"/"，会redirect到非期望页面。所以，解决方案是，虽然hashchange有缺点，但是可以只限定在IE11上使用，而其他浏览器照常用popstate.
    - event
IE11 访问history.state 会抛出错误，解决方案
```
<!--[if IE 11]>
 <script>
  window.history.state = {};
 </script>
<![endif]-->
```
# 3. 应用场景

为window 添加onpushstate


# 外链（兼容性）
https://www.cnblogs.com/jiangtian/p/7055534.html