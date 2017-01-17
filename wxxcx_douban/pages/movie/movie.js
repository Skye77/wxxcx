/*http://api.douban.com/v2/movie/subject/22555(id)*/
// var API_URL="http://api.douban.com/v2/movie/subject/";
var util = require('../../utils/util.js')
var app = getApp();
var API_URL=app.globalData.doubanBase+"/v2/movie/subject/";
Page({
  data:{
  	movie:{}
  },
  onLoad:function(params){
  	var that=this;
  	// console.log(params);
  	wx.request({
  		url:API_URL+params.id,
  		data:{},
  		header:{
  			'content-type': 'application'
  		},
  		success:function(res){
  			// console.log(res.data);
  			that.setData({
  				movie:res.data
  			})
  		}
  	});
  }
})
