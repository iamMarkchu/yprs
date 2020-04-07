// pages/my/my.js
var app = getApp()
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
        href: "/pages/my/question/question"
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
    ],
    favorHref: "/pages/my/favorite/favorite",
    historyHref: "/pages/my/history/history",
    score: 0,
    userData: {
      nickName: '用户',
      avatarUrl: 'http://iph.href.lu/60x60',
      sign: 0,
    },
    rank: 0
  },
  bindGoTo: function (event) {
    // console.log(event)
    wx.navigateTo({
      url: event.target.dataset.href,
    })
  },
  bindSign: function (event) {
    wx.request({
      url: app.globalData.apiRoot + '/personal/sign',
      method: 'POST',
      data: {
        "id": app.globalData.openId
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
              score: res.data.data.usableIntegral
            })
          }
        })
        // 获取排名
        wx.request({
          url: app.globalData.apiRoot + '/personal/getMyRanking',
          method: 'POST',
          data: {
            "id": app.globalData.openId
          },
          success: res => {
            console.log(res)
            this.setData({
              rank: res.data.data
            })
          }
        })
        // 获取积分榜
        wx.request({
          url: app.globalData.apiRoot + '/personal/integralList',
          method: 'POST',
          data: {
            "openId": app.globalData.openId,
            "pageNum": 1,
            "pageSize": 5,
            "type": "1"
          },
          success: res => {
            console.log(res)
            var scoreList = res.data.data.list.map(item => {
              return {
                username: item.name,
                score: item.integral,
                ranking: item.ranking
              }
            })
            this.setData({
              scoreList: scoreList
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