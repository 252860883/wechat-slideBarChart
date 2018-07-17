# wechat-slideBarChart
小程序仿KEEP左右滑动定位柱状图表

### 效果演示
![image](http://wx2.sinaimg.cn/mw690/a73bc6a1ly1frirt7juqeg20900fu4lh.gif)

## 功能

- [x] 左右滑动，图表进行位移，片刻进行位置矫正，底部数据展示更新
- [x] 在android ios 测试，功能可用

## 使用

1. 复制page下的文件夹到自己项目中
2. 配置app.json
3. 编译

## 注意
1. 没有使用canvas方法实现（因为小程序使用原生canvas组件，在滑动页面不友好），但view组件的堆叠对于页面渲染的性能有损耗
2. 标签的class名尽量不要动，如果修改请注意同步修改在js文件中获取标签宽度的class名，否则会造成偏移
3. ip5等手机仍然存在卡顿现象，暂时没有完全解决
4. 欢迎提issue
