// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chartData: [{
        name: 'Jan',
        value: 200
      },
      {
        name: 'Feb',
        value: 20
      },
      {
        name: 'Mar',
        value: 120
      },
      {
        name: 'Apr',
        value: 90
      },
      {
        name: 'May',
        value: 110
      },
      {
        name: 'June',
        value: 140
      },
      {
        name: 'July',
        value: 160
      },
      {
        name: 'Aug',
        value: 50
      }, {
        name: 'Sept',
        value: 60
      }, {
        name: 'Oct',
        value: 140
      },
    ],
    currentData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  // 滑动组件变化时处罚
  currentBarChange:function(e){
    console.log(e.detail),
    this.setData({
      currentData:e.detail
    })
  }
})