var app = getApp()

Page({
  data: {
    data:[]
  },
  toChoAciv:function(){
    wx.navigateTo({
      url: '../chooseActivity/chooseActivity'
    })
  }
})
