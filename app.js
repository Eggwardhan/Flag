App({
  globalData: {
    g_OPEN_ID: null,
    auth: ""
  },
  
  onLaunch: function () {
    var that = this;
    wx.getStorage({
      key: 'auth1',
      success: function (e) {
        console.log('auth'+e.data)
        that.globalData.auth = e.data
      }
    })
    wx.login({
      success: function (res) {
        var code = res.code; //复制给变量就可以打印
        
        if (code) {
          if (that.globalData.auth == "") {

            wx.request({
              url: "http://www.eggwardhan.com/login?code=" + code,//自己的服务接口地址
              method: 'POST',
              success: function (res) {
                console.log(res)
                 let auth1=res.data.auth
                wx.setStorageSync('auth1', auth1);
                // that.globalData.auth =auth1;

              }
              /* data: {
                 encryptedData: res.encryptedData,
                 iv: res.iv,
                 code: code,
               },*/
            })// request
            wx.getUserInfo({
              success: function (res) {
                userInfo   // 只存储个人的基础数据
                wx.setStorageSync('userInfo', res.userInfo)

                //请求自己的服务器，解密用户信息 获取unionId等加密xin息

              }
            })
          }
          else { console.log("auth:" + that.globalData.auth) }
        }
        else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }


    })
  },
  onLoad:function(){
    let that=this;
    
  }
  /*
    uploadFile:function(){
      var that=this,
          i=data.i?data.i:0,
          success=data.success?data.success:0;
     wx.uploadFile({
       url: data.url,
       filePath: data.path[i],
       name: 'file',
       success:(resp)=>{
         success++;
          console.log(resp);
       },
       complete:()=>{
           i++;
           if(i==data.path.lenth){
             console.log('success'+success)
           }
           else{
             data.i=i;
             data.success=success;
             that.uploading(data);
           }
       }
     })
    }*/

})