// var API_URL="http://api.douban.com/v2/movie/subject/";
var app = getApp();
Page({
  data:{
  	info: app.data.info, 
    infoMess: '',
    tel: '',
    telN:'',
    yz: '',
    yzN:'',
    tipHidden: true,
    yzHidden: true,
    fsHidden: true,
    iconSize: [30],
    iconColor: 'green',
    iconType:'success'
  },
	//获取用户名和密码输入框信息
  telInput:function(e){
    this.setData({
      telN:e.detail.value
    })
  },
  yzInput:function(e){
    this.setData({
      yzN:e.detail.value
    })
  },
	//提示弹框——下一步按钮
  tipTapBtn:function(){
      this.setData({
        tipHidden: false
      })
    },
  //input信息不完善取消弹框
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
        url:'../../movie/movie'
    }),
    this.setData({
        tipHidden: true
    })
  },
 //验证码弹框，0.5s后自动隐藏
  faTap:function(){
    if(this.data.telN == ""){
      this.setData({
        yzHidden: false
      });
    }else{
      wx.showToast({
        title:"发送成功",
        icon:"success",
        duration:1000
      });
      setTimeout(function(){
        fsHidden: true
      },100)
    }
  },
  //手机号不完善取消弹框
  yzChange:function(){
    this.setData({
        yzHidden: true
    })
  },
})
