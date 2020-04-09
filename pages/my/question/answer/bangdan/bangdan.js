// pages/my/question/answer/bangdan/bangdan.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionType: 3,
    questions:[],
    title: '',
    titleMap: {
      "3": '全国错题榜',
      "4": "错题榜单",
      "5": "已学习题",
      "6": "未学习题"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      //questionType: options.type,
      questionType: 1,
      title: this.data.titleMap[options.type]
    })
    wx.setNavigationBarTitle({
      title: this.data.titleMap[options.type] 
    })
    wx.request({
      url: app.globalData.apiRoot + '/answer/findAnswer',
      method: 'POST',
      data: {
        "type": this.data.questionType
      },
      success: res => {
        console.log(res)
        var questions = res.data.data.map(item => {
          item.options = item.options.reverse()
          return item;
        })
        this.setData({
          questions: questions
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