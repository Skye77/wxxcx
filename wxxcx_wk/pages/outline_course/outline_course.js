//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    data:[
      {school: '上海复旦大学',time:'12.23 18:30',remand:'咖啡沙龙',title:'留学申请准备1111111111111',            chapter:'留学22222222222'},
      {school: '上海复旦大学',time:'12.23 18:30',remand:'培训班',title:'留学申请准备1111111111111',            chapter:'留学22222222222'},
      {school: '上海复旦大学',time:'12.23 18:30',remand:'咖啡沙龙',title:'留学申请准备1111111111111',            chapter:'留学22222222222'},
    ]
  },
  toCity:function(){
    wx.navigateTo({
      url: '../chooseCity/chooseCity'
    })
  }
  
})
