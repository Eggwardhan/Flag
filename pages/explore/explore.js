var app = getApp()
var db = require('../../db/db.js')

Page({
  data: {
    recommendClgs: [],
    localLatestClgs: []
  },
  onLoad: function () {
    var recommendClgs = db.getRecommendClgs()
    var localLatestClgs = db.getLocalLatestClgs('demolocation')
    //console.log(recommendClgs)
    //console.log(localLatestClgs)
    this.setData({
      recommendClgs: recommendClgs,
      localLatestClgs: localLatestClgs
    })
  },
  onPullDownRefresh: function () {
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  onReachBottom: function () {},
  goDetail: function (event) {
    wx.navigateTo({
      url: '../detail/detail?clgid=' + event.currentTarget.dataset.clgid
    })
  }
})