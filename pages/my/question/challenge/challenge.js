// pages/my/question/challenge/challenge.js
var app = getApp()
console.log(app)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionType: 2,
    questions: [],
    overQuestions: [],
    currentIndex: 0,
    num: 0,
    rate: 0,
    totalNum: 0,
    isLast: 0
  },
  bindSelect: function(event) {
    // 获取选项的id
    console.log(event.target.dataset.id)
    var selectedAnswerId = event.target.dataset.id
    var isCorrect = event.target.dataset.correct
    // 是否是最后一题
    // 找到当前的问题
    var question = this.data.questions[this.data.currentIndex]
    // 调用答题接口
    wx.request({
      url: app.globalData.apiRoot + '/answer/beginAnswer',
      method: 'POST',
      data: {
        "customerId": app.globalData.openId,
        "answerId": question.id,
        "integral": question.integral,
        "isCorrect": isCorrect,
        "options": selectedAnswerId
      },
      success: res => {
        console.log(res)
        if (this.data.currentIndex == this.data.questions.length - 1) {
          this.setData({
            isLast: 1
          })
          this.finish()
        } else {
          this.setData({
            currentIndex: this.data.currentIndex+1
          })
        }
      }
    })
  },
  finish:function() {
    wx.request({
      url: app.globalData.apiRoot + '/answer/findOverAnswer',
      method: 'POST',
      data: {
        "customerId": app.globalData.openId,
        "type": this.data.questionType
      },
      success: res => {
        console.log(res)
        this.setData({
          overQuestions: res.data.data.answers,
          num: res.data.data.num,
          rate: res.data.data.rate,
          totalNum: res.data.data.totalNum
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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