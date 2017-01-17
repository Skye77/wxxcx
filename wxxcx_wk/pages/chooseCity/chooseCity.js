var app = getApp()

Page({
  data: {
    data:[
      {city: '上海'},
      {city: '北京'},
      {city: '杭州'},
      {city: '南京'},
      {city: '苏州'},
      {city: '扬州'},
      {city: '西安'},
      {city: '乌鲁木齐'}
    ]
  },
  toAciv:function(){
    wx.navigateTo({
      url: '../activity/activity'
    })
  }
})
