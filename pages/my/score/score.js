// pages/my/score/score.js
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
    currentIndex: 1
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