var app = getApp();
Page( {  
  data: {
  	weikes:[
  		{
  			stuPic:"../../images/subject_bg_03.jpg",
  			rightTop:"语音+PPT",
  			degree:"Benjhi | 英国皇家学院硕士",
  			stuTxt:"留学申请准备课堂第四季留学申请准备课堂第四季留学申请准备课堂第四季...",
			scan:"浏览54",
			comment:"评论23",
			like:"喜欢34",
			reward:"打赏876"
  		},{
  			stuPic:"../../images/subject_bg_03.jpg",
  			rightTop:"视频直播",
  			degree:"Benjhi | 英国皇家学院硕士",
  			stuTxt:"留学申请准备课堂第四季留学申请准备课堂第四季留学申请准备课堂第四季...",
			scan:"浏览54",
			comment:"评论23",
			like:"喜欢34",
			reward:"打赏876"
  		}
  	],
  	article:[
  		{
  			artTxt:"留学申请准备课堂第四季留学申请准备课堂第四季留学申请准备课堂第四季...",
  			artPic:"../../images/art.jpg",
  			artTop:"文章",
  			scan:"浏览54",
			comment:"评论23",
			like:"喜欢34",
			reward:"打赏876"
  		},{
  			artTxt:"留学申请准备课堂第四季留学申请准备课堂第四季留学申请准备课堂第四季...",
  			artPic:"../../images/art.jpg",
  			artTop:"文章",
  			scan:"浏览95",
			comment:"评论23",
			like:"喜欢34",
			reward:"打赏876"
  		},{
  			artTxt:"留学申请准备课堂第四季留学申请准备课堂第四季留学申请准备课堂第四季...",
  			artPic:"../../images/art.jpg",
  			artTop:"文章",
  			scan:"浏览155",
			comment:"评论23",
			like:"喜欢34",
			reward:"打赏876"
  		}
  	],
    
    winWidth: 0,  
    winHeight: 0,  
    // tab切换  
    currentTab: 0,  
  },  
  onLoad: function() {  
    var that = this;  
  	//获取系统信息 
    wx.getSystemInfo( {  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
  
    });  
  },
  //  滑动切换tab 
  bindChange: function( e ) {  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  },  
  // 点击tab切换
  swichNav: function( e ) {  
    var that = this;  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  }  
})  