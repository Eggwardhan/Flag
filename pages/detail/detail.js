var app = getApp()
var db = require('../../db/db.js')

Page({
  data: {
    clgid: -1,
    title: '挑战丢shi了',
    ended: false,
    joined: false,
    images: [
      "../../images/1.jpg"
    ],
    intro: "信息出错了！",
    hasAuth:true,
    count:0
  },
  onLoad: function (options) {
    var postId=options._id;
    this.dbPost=new db(postId);
    this.postData=this.dbPost.getPostItemById.data;
    this.setData({
      post:this.postData
    })
//test
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
  },
  
})