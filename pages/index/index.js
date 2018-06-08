var app = getApp()
var db = require('../../db/db.js')
var da=require('../../db/data.js')
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
    , duration: 500,
    
    
  
  },
  onLoad: function () {
    let that=this;
    //test da
    console.log(da.challenges)
    this.setData({
      postList:da.challenges
    })

    console.log('onload')
    /*var userClgs = db.getUserClgs(app.globalData.auth)
    if (!userClgs) return
    //console.log(userClgs)
    this.setData({
      userClgs: userClgs
    })*/
    wx.request({
      url: 'https://www.eggwardhan.com/getRecommendClgs?auth=' + app.globalData.auth,
      method: "GET",
      success: function (res) {
        console.log('success')
        console.log(res.data)
        that.setData({
          postList:res.data
        })
      },
      fail:function(error){
        console.error(error)
      }
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
    var postId=event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: '../detail/detail?clgid=' + postId,
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