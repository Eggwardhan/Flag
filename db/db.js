var data = require('data.js')

var getUser = function (userid) {
  for (let user of data.users)
    if (user.userid = userid)
      return user
  return null
}

var getClg = function (clgid) {
  for (let clg of data.challenges)
    if (clg.clgid == clgid)
      return clg
  return null
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

var getUserClgs = function (userid) {
  var user = getUser(userid)
  if (!user) return null
  var userClgs = []
  for (let clgid of user.clgsid) {
    var clg = getClgGeneral(clgid)
    if (clg) userClgs.push(clg)
  }
  return userClgs
}

var getRecommendClgs = function () {
  var recommendClgs = []
  for (let clgid of data.recommendClgsid) {
    var clg = getClgGeneral(clgid)
    if (clg) recommendClgs.push(clg)
  }
  return recommendClgs
}

var getLocalLatestClgs = function (location) {
  var clgs = []
  clgs.push(data.challenges[0])
  return clgs
}

module.exports = {
  getClgDetail: getClgDetail,
  getUserClgs: getUserClgs,
  getRecommendClgs: getRecommendClgs,
  getLocalLatestClgs: getLocalLatestClgs
}