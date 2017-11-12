// pages/hand/hand.js
Page({

  /**
   * 页面的初始数据
   */
  choose:function(){
    var that=this
    var dsrc=this.data.dsrc
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;//这里是选好的图片的地址，是一个数组
        var imgsrc = res.tempFilePaths;
        dsrc = dsrc.concat(imgsrc); 
        that.setData({
          dsrc: dsrc,
          ddsrc: '../images/chooimg.gif'
        })

      }
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  data: {
    dsrc:[]
  
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