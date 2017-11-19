// pages/travelDetail/travelDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  photo:function(e){
    wx.navigateTo({
      url: '../photo/photo?id='+e.currentTarget.dataset.id,
    })
  },
  map: function (e) {
    wx.openLocation({
      latitude: Number(e.currentTarget.dataset.lat),
      longitude: Number(e.currentTarget.dataset.lon),
      name: e.currentTarget.dataset.name,
      scale: 15
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
      url: app.globalData.url + 'api/index/trips_info',
      data: { trips_id: options.id },
      success: function (res) {
        console.log(res.data)
        that.setData({
          travel:res.data.data
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