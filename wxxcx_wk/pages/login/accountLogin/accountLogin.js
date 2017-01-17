var app = getApp()
Page({
	data:{
		userName: '',
		modalHidden: true,
		proSels:[
			{
				selNum:"0\n",
				selCont:"微课",
				url:'../../weike/weike'
			},{
				selNum:"10\n",
				selCont:"培训班",
				url:'../../stuClass/stuClass'
			},{
				selNum:"10\n",
				selCont:"咖啡沙龙",
				url:'../../coffee/coffee'
			}
		],
		lists: [
	      {
	        id: 'study',
	        iconImg:"/images/1study.png",
	        name: '学习中心',
	        url:'../../study/study'
	      }, {
	        id: 'friend',
	        iconImg:"/images/2friend.png",
	        name: '关注好友',
	        url:'../../friend/friend'
	      }, {
	        id: 'message',
	        iconImg:"/images/3message.png",
	        name: '我的消息',
	        url:'../../index/index'
	      }, {
	        id: 'label',
	        iconImg:"/images/4label.png",
	        name: '修改个人标签',
	        url:'../../change_tags/change_tags'
	      },{
	        id: 'program',
	        iconImg:"/images/5program.png",
	        name: '方案众包',
	        url:'../../index/index'
	      }, {
	        id: 'on-line',
	        iconImg:"/images/6on-line.png",
	        name: '线上约见',
	        url:'../../index/index'
	      }, {
	        id: 'offer',
	        iconImg:"/images/7offer.png",
	        name: 'offer预测',
	        url:'../../index/index'
	      }, {
	        id: 'organization',
	        iconImg:"/images/8organ.png",
	        name: '机构对比',
	        url:'../../index/index'
	      }
    	],
    	infos:[
    		{
    			// idPro:'　S设计狮',
    			idIcon:'/images/icon01.jpg',
    			idInfo:'总共累积35金豆/ 剩余12金豆',
    			idPic01:'/images/ico01.jpg',
    			idPic02:'/images/ico02.png',
    			idPic03:'/images/ico03.png',
    			idPic04:'/images/ico04.png'
    		}
    	]
	},
	onLoad:function(){
		// wx.hideToast();
		var that =this;
		wx.showToast({
			title:"加载中...",
			icon:"loading",
			duration:1000
		});

    	//调用应用实例的方法获取全局数据
    	app.getUserInfo(function(userInfo){
     	 //更新数据
	     	that.setData({
	        	userInfo:userInfo
	     	})
    	});

    	//获取登录页面的用户名 
        wx.getStorage({  
            key: 'userN',  
            success: function (res) {  
                that.setData({  
                    userName: res.data,  
                })  
            }  
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
      		url:'../../proson/proson'
    	}),
	    this.setData({
	      modalHidden: true
	    })
  	},
})
