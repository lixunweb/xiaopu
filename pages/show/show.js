// pages/show/show.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  map:function(e){
    wx.openLocation({
      latitude: Number(e.currentTarget.dataset.lat),
      longitude: Number(e.currentTarget.dataset.lon),
      name: e.currentTarget.dataset.name,
      scale: 15
    })  

  },
  upload:function(){
    wx.navigateTo({
      url: '../activeUpload/activeUpload',
    })
  },
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    console.log(options.state)
    var id = options.id;
    var state = options.state;
    var that = this
    that.setData({
      id:id,
      state:state
    })
    var WxParse = require('../../wxParse/wxParse.js');
    wx.request({
      url: app.globalData.url + 'api/index/activity_info',
      data: {activity_id:id},
      success: function (res) {
        console.log(res.data)
        that.setData({
          activeDetail: res.data.data,
          content: WxParse.wxParse('article', 'html', res.data.data.info, that, 5),
          content: WxParse.wxParse('info', 'html', res.data.data.notice, that, 5)
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})