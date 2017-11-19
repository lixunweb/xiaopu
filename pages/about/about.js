// pages/about/about.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  tab1:function(){
    var that=this
    that.setData({
      hidden:true,
      show: false
    })
  },
  tab2: function () {
    var that = this
    that.setData({
      hidden: false,
      show: true
    })
  },
  detail:function(e){
    wx.navigateTo({
      url: '../newDetail/newDetail?id='+e.currentTarget.dataset.id,
    })
  },
  data: {
    hidden:true,
    show:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: app.globalData.url +'api/index/news_list' ,
      success:function(res){
        console.log(res)
        that.setData({
          newsdata: res.data.data,
          newsList:res.data.data.dataList
        })
      }
    })
    var WxParse = require('../../wxParse/wxParse.js');
    wx.request({
      url: app.globalData.url + 'api/index/about_info',
      success: function (res) {
        console.log(res)
        that.setData({
          content: WxParse.wxParse('article', 'html', res.data.data.detail, that, 5),
          info: res.data.data
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