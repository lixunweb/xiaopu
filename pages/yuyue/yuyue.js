// pages/yuyue/yuyue.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  phone:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  bindFormSubmit:function(e){
    console.log(e.detail.value.sfz)
    wx.request({
      url: app.globalData.url + 'api/hospital/order',
      data: { depId: '1', dep1Name: '一级科室', dep2Name: '二级科室', yysd: '上午', hospitalId: '1', fee: '30', tvCard: 'ywyeqeg', codeId:'121',yishiId:'2', yysj:'周三', identity: e.detail.value.sfz, dianHua: e.detail.value.phone, verifyCode: e.detail.value.code},
      success:function(res){
        console.log(res.data)
        if (res.data.ret == 1) {
          wx.showModal({
            content: res.data.msg
          })
        }
        else {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  code:function(){
    wx.request({
      url: app.globalData.url + 'api/hospital/phone_code',
      data:{phone:this.data.phone},
      success:function(res){
        if(res.data.ret==1){
          wx.showModal({
            title:'获取失败',
            content:res.data.msg
          })
        }
        else{
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }
        console.log(res.data)
      }
    })
  },
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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