var data = require('data.js')
const apiBase = 'https://www.eggwardhan.com/'
export const api = {
  // 获取id
  getUserClgs: apiBase + 'getUserClgs?auth=',
  getRecommendClgs: apiBase + 'getRecommendClgs',
  }
export function getRecommendClgs(clgId){
 wx.request({
   url: api.getRecommendClgs,
   method:'GET',
   success:function(res){
     
   }
 })
}  
export default class Text{
 constructor(postId){
   this.storageKeyName='postList';
   this.postId=postId;
 } 
 /*
 getPostItemById(){
   var postsData=this.getAllPostData();
   var len=postsData.length;
   for(var i=0;i<len;i++){
     if(postsData[i].postId==this.postId){
       return{
         index:i,
         data:postsData[i]
       }
     }
   }
 }*/
 
}
var getClgGeneral = function (clgid) {
  var clg = getClg(clgid)
  if (!clg) return null

  var clgGeneral = {
    clgid: clg.clgid,
    title: clg.title,
    ended: false,
    cover: clg.images[0],
    intro_brief: clg.intro.length > 20 ? clg.intro.substr(0, 20) + '...' : clg.intro
  }

  if (clg.endTime != -1)
    if (new Date().getTime() > clg.endTime)
      clgGeneral.ended = true
  
  return clgGeneral
}

var getClgDetail = function (clgid, userid) {
  var clg = getClg(clgid)
  if (!clg) return null

  var clgDetail = {
    clgid: clg.clgid,
    title: clg.title,
    ended: false,
    joined: false,
    images: clg.images,
    intro: clg.intro
  }

  if (clg.endTime != -1)
    if (new Date().getTime() > clg.endTime)
      clgDetail.ended = true
  
  var user = getUser(userid)
  if (user)
    for (let userClgid of user.clgsid)
      if (userClgid == clgid) {
        clgDetail.joined = true
        break
      }
  
  return clgDetail
}



var getRecommendClgs = function () {
  var recommendClgs = []
  for (let clgid of data.recommendClgsid) {
    var clg = getClgGeneral(clgid)
    if (clg) recommendClgs.push(clg)
  }
  return recommendClgs
}


module.exports = {
 
}