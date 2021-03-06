# webPractice
### 模仿慕课网的案例进行学习和思考
- bootstrap练习
    - [青春主题网站](https://seven-share.github.io/webPractice/bootstrapPractice/youth/index.html)
        - 网页滚动到该位置，该位置的东西有动效产生
    - [后台网页](https://seven-share.github.io/webPractice/bootstrapPractice/admin/index.html)
        - 中规中矩的后台网站设计
    - [新闻排版练习](https://seven-share.github.io/webPractice/bootstrapPractice/news/index.html)
    - [拖动排序练习](https://seven-share.github.io/webPractice/bootstrapPractice/sotExample/sortTry.html)
- 原生js操作dom
    - 阅读jsDom编程艺术这本书，同时也根据书中的代码功能片段，自己组合成为一个小网站
    - [点击切换]( https://seven-share.github.io/webPractice/jsDomBook/onclick/test.html)
    - [图片滚动]( https://seven-share.github.io/webPractice/jsDomBook/scroll/list.html)
    - [网站实例模仿]( https://seven-share.github.io/webPractice/jsDomBook/exercise/index.html)
- [从设计稿到网站](https://seven-share.github.io/webPractice/webpageFromPs/index.html)
    - 从ps切图做起
    - 使用flex布局
    - 效果网页
    - banner宽度1500px
    - 其他有效长度为1100px
    - 在大屏幕上会显示的不好
    - 仅为布局联系
- [回到顶部](https://seven-share.github.io/webPractice/backToTop/backToTop.html)
    - 用到监测滚动条事件。
    - 控制滚动条速度。
    - 锚链接的使用，两个a标签  
        - 一个是href：#xxx，  
        - 一个是name：xxx，两个相呼应。
    - 利用js控制显示与否。
- [手风琴伸缩效果](https://seven-share.github.io/webPractice/cssStretch/index.html)
    - css布局
    - js切换class，达到变换的效果
    - 注意onclick里的循环，理解闭包
- [自己设计下拉菜单](https://seven-share.github.io/webPractice/downMenu/index.html)
    - css布局，绝对定位和相对定位
    - js逻辑较多，一步步添加即可
    - 注意遮罩层效果，加强学习

- [日历选择，组件编写](https://seven-share.github.io/webPractice/datePicker/index.html)
    - 整体步骤
        - 使用html合理规划组件结构
        - 为组件编写合理的样式
        - 使用js获取所需数据
        - 将数据和html结合
        - 用户事件处理
    - 注意Date（）函数的使用方法月份从0开始数
    - 注意月份切换函数绑定在包裹标签上，因为内部每次切换
    绑定的函数会被删除
    - css书写较为长，防止使用过程中的重名
- CANVAS练习
    - [七巧板绘制](https://seven-share.github.io/webPractice/canvas/drawTangram/index.html)
        - 将要画的板子的数据存在一个数组中，一次for循环即可
        - context.fillStyle，context.fill()
    - [定时同心圆绘制](https://seven-share.github.io/webPractice/canvas/concentricCircle/index.html)
        - 闭包的使用，注意定时器是异步操作
    - [倒计时散落小球效果](https://seven-share.github.io/webPractice/canvas/concentricCircle/index.html)
        - 首先将倒计时，用小球矩阵表现出来
        - 每次变化时，产生新的彩色小球，散落
        - 倒计时，使用timeInterval，每次执行的时候现在显示时间和获取的实时时间进行对比，不一样的话就进行修改，进行渲染
        - 散落的小球改变其xy数值，每次重新渲染
    - [图片放大和水印](https://seven-share.github.io/webPractice/canvas/drawImage/scaleAndwatermark/index.html)
        - 水印是使用两个canvas，第二次渲染的时候，将水印canvas渲染上去，也可以直接渲染水印的图片
        - 放大效果，注意计算中心点
    - [放大镜效果](https://seven-share.github.io/webPractice/canvas/drawImage/magnifyingGlass/index.html)
        - 使用两个canvas，第二个canvas放入放大后的图片，计算点击位置，推算出在放大图片的位置，使用clip剪影，将第二个canvas剪辑，并显示
    - [图像像素处理](https://seven-share.github.io/webPractice/canvas/drawImage/imageData/index.html)
        - 使用两个canvas，第二个canvas放入放大后的图片，计算点击位置，推算出在放大图片的位置，使用clip剪影，将第二个canvas剪辑，并显示