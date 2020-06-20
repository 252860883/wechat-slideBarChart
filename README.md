# wechat-slideBarChart
小程序滑动定位柱状图表组件

### 效果演示
![image](http://wx4.sinaimg.cn/mw690/a73bc6a1ly1g0kzdf19l3g20a80b47j8.gif)

## 功能

- [x] 左右滑动，图表进行位移，片刻自动进行位置矫正，当前展示数据更新
- [x] 在Android iOS 测试，功能可用

## 使用

1. 复制 component 下的 slideBarChart 文件夹到自己项目中
2. 配置对应 page 页面的 json文件
```
{
  "usingComponents": {
    "slideBarChart":"../../component/slideBarChart/slideBarChart"
  }
}
```
3.page页面引入对应组件，配置对应属性



## 组件属性

| 属性名称 | 格式 | 作用 |
|--|--|--|
| chartData  | json数组 | 渲染图表所需的数据 |
| xName  | 属性名 | chartData中的x轴展示的属性名 |
| yName  | 属性名 | chartData中的柱状图每个展示的值属性名 |
| bindcurrentBarChange  | 自定义事件名称 | 当组件滑动变化时触发该事件，并返回当前展示的数据|


## 注意
1. 没有使用canvas方法实现（因为小程序使用原生canvas组件，在滑动页面不友好），但view组件的堆叠对于页面渲染的性能有损耗
2. 标签的class名尽量不要动，如果修改请注意同步修改在js文件中获取标签宽度的class名，否则会造成偏移
3. 若想修改样式直接定位到组件的每个css样式，自定义修改即可
4. ip5等手机仍然存在偶尔卡顿现象，暂时没有完全解决
5. 欢迎提issue






