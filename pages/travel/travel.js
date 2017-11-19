// pages/travel/travel.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  detail:function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../travelDetail/travelDetail?id=' + e.markerId,
    })
  },
  data: {
    x:'113.324520',
    y:'23',
    markers: [{
      // iconPath: "../images/map.png",
      id: 1,
      latitude: 23,
      longitude: 113.32452,
      callout:{
        content: "广州长隆旅游度假区",
        bgColor: "#fff",
        color: "#333",
        fontSize:18,
        padding:10,
        borderRadius:5,
        display:'ALWAYS'
      }
      
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.request({
      url: app.globalData.url + 'api/index/trip_cat_list',
      success:function(res){
        console.log(res)
        that.setData({
          nav:res.data.data
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