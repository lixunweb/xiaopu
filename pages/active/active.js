// pages/active/active.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  activeDetail:function(e){
    console.log(e)
    wx.navigateTo({
      url: '../show/show?id='+e.currentTarget.dataset.id+'&state='+e.currentTarget.dataset.state,
    })
  },
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: app.globalData.url +'api/index/activities',
      success:function(res){
        console.log(res.data)
        that.setData({
            activeList:res.data.data
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
    wx.request({
      url: app.globalData.url_hos +'/page/15548337',
      method:'POST',
      success:function(res){
        console.log(res.data)
      }
    })
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