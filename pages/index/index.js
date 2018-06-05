var app = getApp()
var db = require('../../db/db.js')
import { api, challenges } from '../../db/data.js';
Page({
  data: {
    userClgs: [],
    navTab: ["热门","最新"],
    currentNavtab:"0",
    imgUrls: [
      '../../images/1.jpg'
      , '../../images/index.png'
      , '../../images/explore.png'
    ]
    , indicatorDots: true
    , autoplay: false
    , interval: 3000
    , duration: 500
    
  
  },
  onLoad: function () {
    console.log('onload')
    var userClgs = db.getUserClgs(app.globalData.g_OPEN_ID)
    if (!userClgs) return
    //console.log(userClgs)
    this.setData({
      userClgs: userClgs
    })
  },

  onPullDownRefresh: function () {
    this.onLoad()
    wx.stopPullDownRefresh()
  },
  goBuild: function () {
    wx.navigateTo({
      url: '../build/build'
    })
  },
  goDetail: function (event) {
    wx.navigateTo({
      url: '../detail/detail?clgid=' + event.currentTarget.dataset.clgid
    })
  },
  switchTab:function(e){
    this.setData({
      currentNavtab:e.currentTarget.dataset.idx
    });
  },
  ballMoveEvent: function (e) {
    var touchs = e.touches[0];
    var pageX = touchs.pageX;
    var pageY = touchs.pageY;
    if (pageX < 25) return;
    if (pageX > this.data.screenWidth - 25) return;
    if (this.data.screenHeight - pageY <= 25) return;
    if (pageY <= 25) return;
    var x = this.data.screenWidth - pageX - 25;
    var y = this.data.screenHeight - pageY - 25;
    this.setData({
      ballBottom: y,
      ballRight: x
    });
  }
});