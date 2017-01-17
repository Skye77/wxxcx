// var API_URL="http://api.douban.com/v2/movie/subject/";
var app = getApp();
Page({
  data:{
  	info: app.data.info, 
    infoMess: '',
    userName: '',
    userN:'',
    passWd: '',
    passW:'',
    tipHidden: true,
    weiboHidden:true
  },
  //直接微信登录按钮
  wxLogin:function(){
    wx.navigateTo({
        url:'../weixinLogin/weixinLogin'
    })
  },
  //微博登录提示框
  weiboTap:function(){
      this.setData({
        weiboHidden: false
      })
    },
  //取消微博提示弹框
  weiboChange:function(){
    this.setData({
        weiboHidden: true
    })
  },
  //去注册按钮
  regiTap:function(){
    wx.redirectTo({
        url:'../register/register'
    })
  },
  //忘记密码按钮
  passTap:function(){
    wx.navigateTo({
        url:'../password/password'
    })
  },
	//获取用户名和密码输入框信息
  userNameInput:function(e){
    this.setData({
      userN:e.detail.value
    })
  },
  passWdInput:function(e){
    this.setData({
      passW:e.detail.value
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
        url:'../accountLogin/accountLogin'
    }),
    this.setData({
        tipHidden: true
    })
  },
  
})
