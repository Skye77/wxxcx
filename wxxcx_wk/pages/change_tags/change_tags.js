Page({
    data:{
        hb1:"添加个人标签让我们进行准确的推荐",
        items:[
        	{
        		cityPic:"/images/guojia_03.png",
        		name:"美国"
        		
        	},{
        		cityPic:"/images/guojia_05.png",
        		name: '英国'
        	},{
        		cityPic:"/images/guojia_07.png",
        		name: '加拿大'
        	},{
        		cityPic:"/images/guojia_12.png",
        		name: '香港'
        	},{
        		cityPic:"/images/guojia_13.png",
        		name: '德国',
        		checked: 'true'
        	},{
        		cityPic:"/images/guojia_14.png",
        		name: '澳大利亚'
        	},{
        		cityPic:"/images/guojia_18.png",
        		name: '法国'
        	},{
        		cityPic:"/images/guojia_19.jpg",
        		name: '其他'
        	}
        ],
        subject:[
        	{
        		sub:"文科",
        		subPic:"/images/zy_03.jpg"
        	},{
        		sub:"商科",
        		subPic:"/images/zy_05.jpg",
        		checked: 'true'
        	},{
        		sub:"理科",
        		subPic:"/images/zy_07.jpg"
        	},{
        		sub:"工科",
        		subPic:"/images/zy_12.jpg"
        	},{
        		sub:"艺术",
        		subPic:"/images/zy_13.jpg"
        	},{
        		sub:"其他",
        		subPic:"/images/guojia_19.jpg"
        	}
        ],
        degree:[
        	{
        		deg:"本科",
        		degPic:"/images/zy_03.jpg"
        	},{
        		deg:"硕士",
        		degPic:"/images/zy_05.jpg",
        		checked: 'true'
        	},{
        		deg:"博士",
        		degPic:"/images/zy_07.jpg"
        	},
        ]
    },
    radioChange: function(e) {
	    // console.log('radio发生change事件，携带value值为：', e.detail.value)
	},
    back:function(){
  		wx.navigateBack()
  	}
})