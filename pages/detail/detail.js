var app = getApp()
var db = require('../../db/db.js')

Page({
  data: {
    clgid: -1,
    title: 'test',
    ended: false,
    joined: false,
    images: [
      "../../images/1.jpg"
    ],
    intro: "abcbalabala",
    hasAuth:true,
    count:0
  },
  onLoad: function (options) {
    var clg = db.getClgDetail(options ? options.clgid : this.data.clgid, app.globalData.g_OPEN_ID)
    if (!clg) return
    this.setData({
      clgid: clg.clgid,
      title: clg.title,
      ended: clg.ended,
      joined: clg.joined,
      images: clg.images,
      intro: clg.intro
    })
  },
  onPullDownRefresh: function () {
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  quit: function () {
    wx.request({
      url: '',
    })
    this.setData({
      joined: false
    })
  },
  join: function () {
    wx.request({
      url: '',
    })
    this.setData({
      joined: true
    })
  },
  invite: function () {
    //生成图片分享，可自定义照片和文字，底部加上小logo
    console.log('invite')
  },
  share: function () {
    //生成图片分享，可自定义照片和文字，底部加上小logo
    console.log('share')
  }
})