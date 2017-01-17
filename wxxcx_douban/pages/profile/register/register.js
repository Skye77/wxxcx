// var API_URL="http://api.douban.com/v2/movie/subject/";
var app = getApp();
Page({
  data:{
  	info: app.data.info, 
    infoMess: '',
    tel: '',
    telN:'',
    passWd: '',
    passW:'',
    userName: '',
    userN:'',
    tipHidden: true,
  },
  //直接微信登录按钮
  wxLogin:function(){
    wx.navigateTo({
        url:'../../movie/movie'
    })
  },
	//获取用户名和密码输入框信息
  telInput:function(e){
    this.setData({
      telN:e.detail.value
    })
  },
  passWdInput:function(e){
    this.setData({
      passW:e.detail.value
    })
  },
  userNameInput:function(e){
    this.setData({
      userN:e.detail.value
    })
  },
	//提示弹框——确定登录按钮
  tipTapBtn:function(){
      this.setData({
        tipHidden: false
      })
    },
  //登录信息不完善取消弹框
  tipChange:function(){
    this.setData({
        tipHidden: true
    })
  },
  //登录信息成功跳转登录页面并取消弹框
  loginTap:function(){
    //保存参数
    try {  
      wx.setStorageSync('userN', this.data.userN)  
      } catch (e) {  
    }
    //跳转个人中心账户
    wx.navigateTo({
        url:'../login/login'
    }),
    this.setData({
        tipHidden: true
    })
  },
  
})
