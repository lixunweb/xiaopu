// pages/hand/hand.js
var common=require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  choose: function () {
    var that = this
    var dsrc = this.data.dsrc
    var picid = this.data.picid
    wx.chooseImage({
      success: function (res) {
        var imgsrc = res.tempFilePaths;//这里是选好的图片的地址，是一个数组
        dsrc = dsrc.concat(imgsrc);
        that.setData({
          dsrc: dsrc
        })
        console.log(imgsrc[0])
        var src = imgsrc[0]
        if (imgsrc.length > 1) {
          picid = [];
          for (var i = 0; i < dsrc.length; i++) {
            wx.uploadFile({
              url: app.globalData.url + 'api/index/upload', //仅为示例，非真实的接口地址
              filePath: dsrc[i],
              name: 'picture',
              success: function (res) {
                console.log(res.data)
                var obj = JSON.parse(res.data);
                console.log(obj.data.pic_id)
                var pic_id = obj.data.pic_id
                picid = picid.concat(pic_id)
                that.setData({
                  picid: picid
                })
                console.log(picid)
                //do something
              }
            })
          }
        }
        else {
          wx.uploadFile({
            url: app.globalData.url + 'api/index/upload', //仅为示例，非真实的接口地址
            filePath: dsrc[0],
            name: 'picture',
            success: function (res) {
              console.log(res.data)
              var obj = JSON.parse(res.data);
              console.log(obj.data.pic_id)
              var pic_id = obj.data.pic_id
              picid = picid.concat(pic_id)
              that.setData({
                picid: picid
              })
              console.log(picid)
              //do something
            }
          })
        }

      }
    })
  },
  bindFormSubmit: function (e) {
    var pic_list = (this.data.picid).toString();
    wx.request({
      url: app.globalData.url + 'api/index/camera_save',
      data: { camera_type: this.data.typev, title: e.detail.value.area, pic_list: pic_list },
      success: function (res) {
        console.log(res.data)
        if(res.data.ret==0){
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }
        else{
          wx.showModal({
            title: '保存失败',
            content: res.data.msg
          })
        }
      }
    })
  },
  radioChange: function (e) {
    var that=this;
    that.setData({
      typev: e.detail.value
    })
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  data: {
    dsrc: [],
    picid:[]
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