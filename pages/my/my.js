// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: "http://iph.href.lu/60x60",
    menuList: [
      {
        text: "我的积分",
        icon: "/resource/images/my_score@3x.png",
        href: "/pages/my/score/score"
      },
      {
        text: "我的评论",
        icon: "/resource/images/my_comments@3x.png",
        href: "/pages/my/commemt/comment"
      },
      {
        text: "我的二维码",
        icon: "/resource/images/my_qrcode@3x.png",
        href: "/pages/my/qrcode/qrcode"
      },
      {
        text: "任务中心",
        icon: "/resource/images/my_task@3x.png",
        href: "/pages/my/task/task"
      },
      {
        text: "答题中心",
        icon: "/resource/images/my_question@3x.png",
        href: "/pages/my/qrcode/qrcode"
      },
      {
        text: "意见反馈",
        icon: "/resource/images/my_suggest@3x.png",
        href: "/pages/my/qrcode/qrcode"
      }
    ],
    scoreList: [
      {
        username: "宁王第一打野",
        score: 7663
      },
      {
        username: "Jack沒有Love",
        score: 7554
      },
      {
        username: "The Shy",
        score: 7554
      }
    ],
    favorHref: "/pages/my/favorite/favorite",
    historyHref: "/pages/my/history/history"
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