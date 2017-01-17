/*http://api.douban.com/v2/movie/search?q=...*/
var API_URL="http://api.douban.com/v2/movie/search";
Page({
  data:{
  	movies:[]
  },
  search:function(e){
  	if(!e.detail.value){
  		return;
  	}
  	wx.showToast({
  		title:"加载中...",
  		icon:"loading",
  		duration:10000
  	});
  	var that=this;

  	wx.request({
  		url:API_URL+"?q="+e.detail.value,
  		data:{},
  		header:{
  			'content-type': 'application'
  		},
  		success:function(res){
  			wx.hideToast();
  			// var data=res.data;
  			that.setData({
  				// title:data.title,
  				movies:res.data.subjects
  			})
  			// console.log(res.data)
  		}
  	});
  }
})
