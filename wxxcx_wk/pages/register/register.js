Page({
    data: {
      second:60,
      fs:'发送验证码',
      fsHi:true,

      tipHidden: true,
      fsHidden:true,
      infoMess: '',
      userName: '',
      userN:'',
      passW:'',
      telN:'',
      codeN:'',
      iconSize: [30],
      iconColor: 'green',
      iconType:'../../images/weixin.jpg' 
    	},
      //提示弹框——确定注册按钮
      tipTap:function(){
        this.setData({
          tipHidden: false
        })
      },
      //注册信息不完善取消弹框
      tipChange:function(){
        this.setData({
            tipHidden: true
        })
      },
      // 不注册回首页按钮
    	modalTap:function(){
  	    wx.switchTab({
        		url:'../index/index'
      	})
    	},
      //直接微信登录按钮
      weixinTap:function(){
        wx.navigateTo({
              url:'../loginProson/loginProson'
        })
      },
      //添加个人标签按钮
      addTags:function(){
        wx.navigateTo({
            url:'Add_tags/Add_tags'
        })
      },
      //获取用户名、密码、手机号、验证码输入框事件
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
      telInput:function(e){
        this.setData({
          telN:e.detail.value
        })
      },
      codeInput:function(e){
        this.setData({
          codeN:e.detail.value
        })
      },
      //注册成功跳转到登录页面
      registerClear:function(){
        wx.navigateTo({
            url:'../login/login'
        }),
        this.setData({
            tipHidden: true
        })
      },
      //验证码弹框，0.5s后自动隐藏
      fsTap:function(){
        // fsHi:false,

        wx.showToast({
          title:'发送成功',
          icon:'success',
          // iconColor:'green',
          fsHidden: false
        })
        setTimeout(function(){
          fsHidden: true
        },500)

        // countdown(this)
        // this.data.fsHidden=false
      }
})

// function countdown(that) {  
//  var second = that.data.second  
//  if (second == 0) {  
//   that.setData({  
//    second: "重新发送"  
//   });  
//   return ;  
//  }  
//  var time = setTimeout(function(){  
//   that.setData({  
//    second: second - 1  
//   });  
//   countdown(that);  
//  }  
//  ,1000)  
// }  