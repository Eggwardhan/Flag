var users = [
  {
    userid: 9999,
    sex: 'male',
    clgsid: [1000, 1001]
  }
]

export const challenges = [
  {
    clgid: 1000,
    title: '地球一小时',
    startTime: -1,
    endTime: 1496455020000,
    images: ['1.jpg'],
    intro: '地球一小时（Earth Hour）是世界自然基金会（WWF）应对全球气候变化所提出的一项全球性节能活动，提倡于每年三月的最后一个星期六当地时间晚上20:30（2018年地球一小时时间为3月24日晚上20：30），家庭及商界用户关上不必要的电灯及耗电产品一小时，以此来表明他们对应对气候变化行动的支持。 过量二氧化碳排放导致的气候变化目前已经极大地威胁到地球上人类的生存。公众只有通过改变全球民众对于二氧化碳排放的态度，才能减轻这一威胁对世界造成的影响。'
  },
  {
    clgid: 1001,
    title: '读书半小时',
    startTime: -1,
    endTime: -1,
    images: ['demo1.jpg', 'demo2.jpg'],
    intro: '读书是指获取他人已预备好的符号、文字并加以辨认、理解、分析的过程，有时还伴随着朗读、鉴赏、记忆等行为。这些符号最常见的是语言文字，其他还有音符、密码、图表等也在此列；一般获取过程使用眼睛观看，也包括盲人用触觉来识别凸字等其他获取方式。'
  },
  {
    clgid: 1002,
    title: '奥森马拉松',
    startTime: 1527991020000,
    endTime: 1528005420000,
    images: ['demo1.jpg', 'demo2.jpg'],
    intro: '马拉松（Marathon）长跑是国际上非常普及的长跑比赛项目，全程距离26英里385码，折合为42.195公里（也有说法为42.193公里）。分全程马拉松（Full Marathon）、半程马拉松（Half Marathon）和四分马拉松（Quarter Marathon）三种。以全程马拉松比赛最为普及，一般提及马拉松，即指全程马拉松。'
  }
]

var recommendClgsid = [1000, 1001, 1002]

module.exports = {
  users: users,
  challenges: challenges,
  recommendClgsid: recommendClgsid
}