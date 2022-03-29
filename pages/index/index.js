// pages/fitst/first.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      navData:[
        {text: '首页'},{text: '超级爆品'},{text: '细莫王牌'},{ text: '精品女包'},{text: '细莫果园'},{text: '细莫海鲜'},
        {text: '细莫坚果'},{text: '陈克明'},{text: 'Swisse'},{ text: '食品零食'},{text: '水果生鲜'},{text: '健康养颜'},
        {text: '美妆护肤'},{text: '日用百货'},{text: '鞋帽服饰'},{ text: '珠宝饰品'},{text: '生活家电'},{text: '童装母婴'},
    ],
    currentTab: 0,
    navScrollLeft: 0,
    flag:false,
    showTab:false,
    },
    switchNav(event){
      var cur = event.currentTarget.dataset.current; 
      //每个tab选项宽度占1/5
      var singleNavWidth = this.data.windowWidth*0.9 / 5;
      //tab选项居中                            
      this.setData({
          navScrollLeft: (cur - 2) * singleNavWidth,
          showTab:false,
      })      
      if (this.data.currentTab == cur) {
          return false;
      } else {
          this.setData({
              currentTab: cur
          })
      }
  },
  switchTab(event){
      var cur = event.detail.current;
      var singleNavWidth = this.data.windowWidth*0.9 / 5;
      this.setData({
          currentTab: cur,
          navScrollLeft: (cur - 2) * singleNavWidth
      });
  },
  toMore(e){
      var cur =e.detail;
      var singleNavWidth = this.data.windowWidth*0.9 / 5;
      this.setData({
          currentTab: cur,
          navScrollLeft: (cur - 2) * singleNavWidth
      });
  },
  closePrice(){
     var myflag=!this.data.flag;
     this.setData({
         flag:myflag
     })
  },
  showTab(){
      var tabShow=!this.data.showTab;
      this.setData({
          showTab:tabShow,
      })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let menuButtonObject = wx.getMenuButtonBoundingClientRect();
      wx.getSystemInfo({
          success: (res) => {
              this.setData({
                  pixelRatio: res.pixelRatio,
                  windowHeight: res.windowHeight,
                  windowWidth: res.windowWidth,
                  navH:res.statusBarHeight + menuButtonObject.height + (menuButtonObject.top - res.statusBarHeight) * 2
              })
          },
      })       
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
  
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
  
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
  
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
  
    }
  })