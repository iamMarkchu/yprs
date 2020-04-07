// pages/my/task/task.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskList: []
  },
  bindGetTask: function(event) {
    wx.request({
      url: app.globalData.apiRoot + '/getMission',
      method: 'POST',
      data: {
        "customerId": app.globalData.openId,
        "missionId": event.target.dataset.id
      },
      success: res => {
        console.log(res)
        var userData  = this.data.userData
        userData.sign = 1
        console.log(userData)
        this.setData({
          userData: userData
        })
        wx.showToast({
          title: '签到成功!',
          icon: 'success',
          duration: 2000
        })
      },
      fail: error => {
        wx.showToast({
          title: '签到失败!',
          icon: 'fail',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.apiRoot + '/findMissionPage',
      method: 'POST',
      data: {
        "openId": app.globalData.openId,
        "pageNum": 1,
        "pageSize": 30
      },
      success: res => {
        console.log(res)
        this.setData({
          taskList: res.data.data.list
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