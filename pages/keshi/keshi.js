// pages/keshi/keshi.js
const app = getApp()
const that=this
var dateFormat=function(time) {
  console.log(time.substring(time.lastIndexOf('-') + 1))
  return time.substring(time.lastIndexOf('-') + 1)
}
Page({

  /**
   * 页面的初始数据
   */
  order:function(){
    wx.navigateTo({
      url: '../yuyue/yuyue',
    })
  },
  week:function(e){
    var index = e.currentTarget.dataset.index
    var that=this
    console.log(e)
    that.setData({
      dateStr: e.currentTarget.dataset.datestr,
      week1: that.data.List[index]
    })
  },
  num: function (e) {
    var that = this
    if(e.currentTarget.dataset.num==0){
      that.setData({
        mm:true
      })
    }
    else{
      that.setData({
        mm: false
      })
    }

  },
  data: {
    mm:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    dateFormat('2018-02-23')
    var that=this
      wx.request({
        url: app.globalData.url + 'api/hospital/chuzhen_date',
        data: { hospitalId: options.hosid, depId:options.id},
        success: function (res) {
          console.log(res.data)
          for (var i = 0; i < res.data.data.calendar.length; i++) {
            res.data.data.calendar[i].dateStr = dateFormat(res.data.data.calendar[i].dateStr)
          }
          console.log(res.data)
          that.setData({
            List: res.data.data.calendar,
            dateStr: res.data.data.calendar[0].dateStr,
            num: res.data.data.calendar[0].amyyNum,
            week1: res.data.data.calendar[0],
            am: res.data.data.calendar[0].amYiShiEntityList
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