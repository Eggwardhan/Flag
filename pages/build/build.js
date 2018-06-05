var app = getApp();  
var auth=app.globalData.auth;
Page({
  data: {
    hideview: true,
    chooseFiles: "../../images/picture.png",
   
    index: 0,
    date1: "2018-5-20",
    date2: '2018-11-11',
    inputTitle: "",
    inputIntro: "",
    inputName: "",
  },
  
  chsImg() {
    let that = this;
    var imgArr = this.data.chooseFiles;
    var imgLength = imgArr.length;

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        console.log("imgL" + imgLength)
        var filePath = res.tempFilePaths[0];
        that.uploadImg(filePath);
        that.setData({
          chooseFiles: imgArr.concat(res.tempFilePaths)
        });
      }
    })
    if (imgLength == 0) return;  //现在存在问题T T想实现的是若不选择图片则不变
  },
  /*
  uploadImg(filePath) {
    wx.uploadFile({
      url: 'http://upload-z1.qiniup.com',
      filePath: filePath,
      name: 'file',
      formData: {
        key: this.data.key,
        token: this.data.credentials
      },
      success: function (res) {
        console.log(res)
      },
      fail: function (error) {
        console.error(error);
      }
    })
  },*/

  
  bindDateChange1: function (e) {
    this.setData({
      date1:e.detail.value
     
    })
    console.log("data1 has been set")
  },
  bindDateChange2: function (e) {
    this.setData({
      date2: e.detail.value
    })
    console.log("data2 has been set")
  },



   
   formSubmit: function (e) {
      var that = this;
      var formData = e.detail.value; //获取表单所有input的值    
      wx.request({
        url: 'http://139.199.121.65/setClgs?auth='+auth,
        header: {
          "Content-Type": "application/json"
        }, 
        dataType: JSON,
        body: {
          title: that.data.inputTitle,
          intro: that.data.intro,
          startTime: that.data.data1, 
          endTime: that.data.data2,
          joinStartTime: that.data.data1,
          joinEndTime: that.data.data2
          },

        success: function (res) {
          console.log(res.data)
          console.log("SUCCESS")
        },
       fail:function(res){
         console.log("failedT T")
       }
      })
      wx.showToast({
        title: '提交成功',
      })
    },
    
  introSubmit: function (e) {
      this.setData({
        inputIntro: e.detail.value
      })
    },
    charChange: function (e) {
      this.setData({
        inputIntro: e.detail.value
      })
    },
    inputTitle: function (e) {
      this.setData({
        inputTitle: e.detail.value
      })
    },
    inputName: function (e) {
      this.setData({
        inputName: e.detail.value
      })
    },
})