var app = getApp();
// var util = require('../../utils/util.js');
Page({
  data: {
    // name: '',
    modalHidden: true,
    head: [
      {
        pic: "/img/icon2.png",
        id: "ID:788888",
        tipPic: "/img/tip.png",
        tip: "提醒",
        arrow: "/img/arrow.png",
        info: "捡起碎片时间，有了2条新回复"
      }
    ],
    items: [
      {
        iconPic: "/img/icon_01.png",
        text: "喜欢",
        iconPic1: "/img/icon_02.png",
        text1: "日记",
        iconPic2: "/img/icon_03.png",
        text2: "相册",
        iconPic3: "/img/icon_04.png",
        text3: "我的广播"
      }, {
        iconPic: "/img/icon_05.png",
        text: "电影·电视",
        iconPic1: "/img/icon_06.png",
        text1: "读书",
        iconPic2: "/img/icon_07.png",
        text2: "音乐",
        iconPic3: "/img/icon_08.png",
        text3: "同城活动"
      }, {
        iconPic: "/img/icon_09.png",
        text: "豆列",
        iconPic1: "/img/icon_10.png",
        text1: "订单",
        iconPic2: "/img/icon_11.png",
        text2: "钱包"
      }
    ]
  },
  onLoad:function(){
    // wx.hideToast();
    wx.showToast({
      title:"加载中...",
      icon:"loading",
      duration:1000
    });

    var that = this
      //调用应用实例的方法获取全局数据
      app.getUserInfo(function(userInfo){
       //更新数据
       that.setData({
          userInfo:userInfo
       })
      })
  },
  //提示框
  modalTap:function(){
    this.setData({
        modalHidden: false
    })
  },
  //提示框取消
  modalChange:function(){
      this.setData({
        modalHidden: true
      })
    },
    //提示框确认退出跳转
    modalClear:function(){
      // wx.navigateBack(),
      wx.switchTab({
          url:'../../profile/profile'
      }),
      this.setData({
        modalHidden: true
      })
    },
})
