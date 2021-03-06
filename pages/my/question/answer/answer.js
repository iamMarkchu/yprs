// pages/my/question/answer/answer.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  bindGoTo: function (event) {
    // console.log(event)
    wx.navigateTo({
      url: event.target.dataset.href,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.apiRoot + '/answer/findNotice',
      method: 'POST',
      data: {
        "pageNum": 1,
        "pageSize": 30
      },
      success: res => {
        console.log(res)
        var list = res.data.data.list.map(item => {
          item.createDate = item.createDate.substring(0, 10).replace('/-/g', '.')
          return item
        })
        this.setData({
          list: list
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