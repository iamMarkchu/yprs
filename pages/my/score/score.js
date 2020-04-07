// pages/my/score/score.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: [
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      }
    ],
    usedScore: [
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      },
      {
        "getDate": "2020.02.02",
        "score": 626,
        "type": "阅读文章",
        "expireDate": "2020.02.02"
      }
    ],
    currentIndex: 1,
    aboutExpireIntegral: 0,
    expireIntegral: 0,
    totalIntegral: 0,
    usableIntegral: 0,
    usedIntegral: 0
  },
  switchTab: function(event) {
    this.setData({
      currentIndex: event.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取积分
    wx.request({
      url: app.globalData.apiRoot + '/integral/getIntegral',
      method: 'POST',
      data: {
        "openId": app.globalData.openId
      },
      success: res => {
        console.log(res)
        this.setData({
          aboutExpireIntegral: res.data.data.aboutExpireIntegral,
          expireIntegral: res.data.data.expireIntegral,
          totalIntegral: res.data.data.totalIntegral,
          usableIntegral: res.data.data.usableIntegral,
          usedIntegral: res.data.data.usedIntegral
        })
      }
    })
    // 获取积分记录
    wx.request({
      url: app.globalData.apiRoot + '/integral/findTakeUsed',
      method: 'POST',
      data: {
        "openId": app.globalData.openId,
        "pageNum": 1,
        "pageSize": 30,
        "type": "1"
      },
      success: res => {
        console.log(res)
        var score = res.data.data.list.map(item => {
          return {
            getDate: item.createDate.substring(0, 10),
            score: item.integral,
            type: item.mode,
            expireDate: item.passDate == null ? "无": item.pastDate.substring(0, 10)
          }
        })
        this.setData({
          score: score
        })
      }
    })

    wx.request({
      url: app.globalData.apiRoot + '/integral/findTakeUsed',
      method: 'POST',
      data: {
        "openId": app.globalData.openId,
        "pageNum": 1,
        "pageSize": 30,
        "type": "2"
      },
      success: res => {
        console.log(res)
        var score = res.data.data.list.map(item => {
          return {
            getDate: item.createDate.substring(0, 10),
            score: item.integral,
            type: item.mode,
            expireDate: item.passDate == null ? "无": item.pastDate.substring(0, 10)
          }
        })
        this.setData({
          usedScore: score
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