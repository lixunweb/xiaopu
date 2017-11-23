// pages/trash/trash.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.url + '/api/index/trash_list',
      success: function (res) {
        console.log(res.data)
        that.setData({
          x: res.data.data[0].lat,
          y: res.data.data[0].lng,
          markers: [{
            // iconPath: "../images/map.png",
            id: res.data.data[0].id,
            latitude: res.data.data[0].lat,
            longitude: res.data.data[0].lng,
            callout: {
              content: res.data.data[0].title,
              bgColor: "#fff",
              color: "#333",
              fontSize: 18,
              padding: 10,
              borderRadius: 5,
              display: 'ALWAYS'
            }

          }]
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