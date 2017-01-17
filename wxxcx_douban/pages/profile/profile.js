var app = getApp();
// var util = require('../../utils/util.js');
Page({
  data: {
    modalHidden: true,
    head: [
      {
        pic: "/img/icon1.png",
        text: "未登录",
        tipPic: "/img/tip.png",
        tip: "设置",
        arrow: "/img/arrow.png",
        info: "暂无新提醒"
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

  modalTap:function(){
    this.setData({
        modalHidden: false
    })
  },

  modalChange:function(){
    this.setData({
      modalHidden: true
    })
  },

  modalClear:function(){
    wx.navigateTo({
        url:'login/login'
    }),

    this.setData({
      modalHidden: true
    })
  }
  // SaoSao: function (event) {
  //   wx.scanCode({
  //     // needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
  //     // scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
  //     success: function (res) {
  //       // var result = res.resultStr;
  //       alert(util.SaoSao());//有时候弹出，有时候直接跳转
  //       alert(res);//有时候弹出，有时候直接跳转
  //     }
  //   })
  // },
})
