//index.js
//获取应用实例
var app = getApp();

Page({
    data:{
        tipHidden: true,
        imgUrls:[
            {
                linkin:'../stuClass/stuClass',
                url:'/images/banner01.jpg'
            },{
                linkin:'../coffee/coffee',
                url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
            },{
                linkin:'../friend/friend',
                url:'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
            },
        ],
        indicatorDots:true,
        autoplay:true,
        interval:2000,
        duration: 500 ,
        subject:null, 
        outline_subject:null     
    },
    onLoad: function(options){
        var subject = [
            {
                date:"11.25 18:30",
                teacherName:"Benjhi | 英国皇家医学院硕士",
                photo:"/images/touxiang/touxiang (20).jpg",
                background_img:"/images/subject_bg_03.jpg",
                detials:"今天跨年今天跨年今天跨年今天跨年今天跨年牛逼的不行牛逼的不行牛逼的不行牛逼的不行牛逼的不行牛逼的不行牛逼的不行",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5"
            },
            {
                date:"12.25 18:30",
                teacherName:"荀晓伟 | 英国皇家医学院硕士",
                photo:"/images/touxiang/touxiang (16).jpg",
                background_img:"/images/subject_bg_03.jpg",
                detials:"中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么中午吃什么",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5"
            },{
                date:"12.28 18:30",
                teacherName:"薛琪 | 阴阳师医学院硕士",
                photo:"/images/touxiang/touxiang (10).jpg",
                background_img:"/images/subject_bg_03.jpg",
                detials:"今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师今天阴阳师",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5"
            }
        ];
        var outline_subject = [
                {
                    id:"green",
                    adress:"上海复旦大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },{
                    id:"red",
                    adress:"北京清华大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },{
                    id:"yellow",
                    adress:"上海同济大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },{
                    id:"blue",
                    adress:"兰州交通大学",
                    time:"12.23 10:00",
                    text:"留学申请课堂准备",
                    img:"/images/xx_bg_03.jpg"
                },
            ];
        var article =[
            {
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            },{
                text:"留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备留学申请准备 ",
                looked:"343",
                liked:"34",
                comment:"67",
                pay:"5",
                img:"/images/article_pic_03.jpg"
            }
        ]
        this.setData({subject:subject});   
    
        this.setData({outline_subject:outline_subject}); 

        this.setData({article}); 
    },
    outline:function(){
        wx.navigateTo({
            url:'../outline_course/outline_course'
        })
    },
    Voice:function(){
        wx.navigateTo({
            url:'../Voice/Voice'
        })
    },

    //提示弹框——确定登录按钮
    tipTap:function(){
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
    //   //保存参数
    //   try {  
    //     wx.setStorageSync('userN', this.data.userN)  
    //     } catch (e) {  
    //   }
      //跳转个人中心账户
      wx.navigateTo({
          url:'../login/login'
      }),
      this.setData({
          tipHidden: true
      })
    },

    // var items = ['航标360°', '分享', '显示在聊天顶部']
    // var pageObject = {
    //   data: {
    //     actionSheetHidden: true,
    //     actionSheetItems: items
    //   },
    //   actionSheetTap: function(e) {
    //     this.setData({
    //       actionSheetHidden: !this.data.actionSheetHidden
    //     })
    //   },
    //   actionSheetChange: function(e) {
    //     this.setData({
    //       actionSheetHidden: !this.data.actionSheetHidden
    //     })
    //   }
    // }

    // for (var i = 0; i < items.length; ++i) {
    //   (function(itemName) {
    //     pageObject['bind' + itemName] = function(e) {
    //       console.log('click' + itemName, e)
    //     }
    //   })(items[i])
    // }

    // Page(pageObject)


    onShareAppMessage: function () {
        return {
          title: '航标360°',
          desc: '我的微课',
          path: '/pages/index/index'
        }
    }
  
})

