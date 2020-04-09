// pages/my/commemt/comment.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData:{},
    comments:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
            // 获取个人信息
            wx.request({
              url: app.globalData.apiRoot + '/personal/get',
              method: 'POST',
              data: {
                "id": app.globalData.openId
              },
              success: res => {
                console.log(res)
                var userData = res.data.data
                //userData.sign = 0
                this.setData({
                  userData: userData
                })
              }
            })
            // 获取我的评论
            wx.request({
              url: app.globalData.apiRoot + '/index/myComment',
              method: 'POST',
              data: {
                "id": app.globalData.openId
              },
              success: res => {
                console.log(res)
                this.setData({
                  comments: res.data.data
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