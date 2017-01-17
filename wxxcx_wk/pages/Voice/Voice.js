//index.js  
//获取应用实例  

var app = getApp()
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')

}


Page({
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue: '',
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value


  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },

  onHide: function () {
    this.videoContext = push
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },

  ZanTap: function (event) {   
      var Zaned = wx.getStorageSync('Zan');  
      Zaned.Zan = !Zaned.Zan;  
      Zaned.num += Zaned.Zan ?-1:1;   
      // 更新緩存值
      wx.setStorageSync('Zan', Zaned);
      // 更新数据绑定，从而切换图片
      this.setData({
          Zan:Zaned
      })
      
      wx.showToast({
        title:Zaned.Zan?"取消赞":"已赞",
        duration:1000
      })

  },

  zhanTap: function (event) {
      var index = event.currentTarget.dataset.index;
      var zhanData = this.data.com[index];
      zhanData.zhan = !zhanData.zhan;
      this.setData({com:this.data.com})
      console.log(zhanData.zhan);
      wx.showToast({
        title:zhanData.zhan?"取消赞":"已赞",
        duration:1000
      })
  },

  data: {
    Zan: {"Zan":true, "num":96},
    com: [
      { name: "张馨予", University: "美国1234大学", subject: "艺术类", article: "留学申请留学申请留学申请留学申请留学申请留学申请", time: "1.3", lou: "12楼", image: "../../images/zhan_03.jpg",zhan:true,index:0, image_ed:"../../images/zhan_04.png" },
      { name: "张馨予", University: "美国1234大学", subject: "艺术类", article: "留学申请留学申请留学申请留学申请留学申请留学申请", time: "1.3", lou: "12楼", image: "../../images/zhan_03.jpg",zhan:true,index:1,image_ed:"../../images/zhan_04.png" },
      { name: "张馨予", University: "美国1234大学", subject: "艺术类", article: "留学申请留学申请留学申请留学申请留学申请留学申请", time: "1.3", lou: "12楼", image: "../../images/zhan_03.jpg",zhan:true,index:2,image_ed:"../../images/zhan_04.png" }
    ],

    imgUrls: [
      '../../images/slide-1.jpg',
      '../../images/slide-2.jpg',
      '../../images/slide-3.jpg',
      '../../images/slide-1.jpg',
      '../../images/slide-2.jpg',
      '../../images/slide-3.jpg',
      '../../images/slide-1.jpg',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    ke: { curriculum: "美国商科" },
    art: [
      { article: "留学申请留学申请留学申请留学申请留学申请留学申请留学申请留学申请留学申请", browse: 54, comment: 23, love: 34, reward: 876 },
      { article: "留学申请留学申请留学申请留学申请留学申请留学申请", browse: 54, comment: 23, love: 34, reward: 876 },
      { article: "留学申请留学申请留学申请留学申请留学申请留学申请", browse: 54, comment: 23, love: 34, reward: 876 }
    ],
    item: [
      { hour: "课时1", time: "2``2", },
      { hour: "课时2", time: "2``2" },
      { hour: "课时3", time: "2``2" },
      { hour: "课时4", time: "2``2" },
    ],
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

    // 缓存
    
    var Zan = wx.getStorageSync('Zan');
    if (Zan) {
      that.setData({ Zan: Zan })
    } else {
      var Zan = {};
      Zan.Zan = true;
      Zan.num = that.data.Zan.num;
      wx.setStorageSync('Zan', Zan);
    }
   


  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }


})
