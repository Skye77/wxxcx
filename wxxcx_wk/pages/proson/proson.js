var app = getApp()
Page({
	data:{
		modalHidden: true,

		proSels:[
			{
				selCont:"微课"
			},{
				selCont:"培训班"
			},{
				selCont:"咖啡沙龙"
			}
		],
		lists: [
	      {
	        iconImg:"../../images/1study.png",
	        name: '学习中心'
	      }, {
	        iconImg:"../../images/2friend.png",
	        name: '关注好友'
	      }, {
	        iconImg:"../../images/3message.png",
	        name: '我的消息'
	      }, {
	        iconImg:"../../images/4label.png",
	        name: '修改个人标签'
	      },{
	        iconImg:"../../images/5program.png",
	        name: '方案众包'
	      }, {
	        iconImg:"../../images/6on-line.png",
	        name: '线上约见'
	      }, {
	        iconImg:"../../images/7offer.png",
	        name: 'offer预测'
	      }, {
	        iconImg:"../../images/8organ.png",
	        name: '机构对比'
	      }
    	],
    	infos:[
    		{
    			idPro:'点此登录',
    			idRegister:'还没有账号？点此注册',
    			idIcon:'../../images/icon1.png'
    		}
    	]
	},
	onLoad:function(){
		// wx.hideToast();

		wx.showToast({
		  title: '加载中',
		  icon: 'loading',
		  duration: 1000
		})

		setTimeout(function(){
		  wx.hideToast()
		},1000)
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
      		url:'../login/login'
    	}),

	    this.setData({
	      modalHidden: true
	    })
  	}

})