
let request = require('../../utils/request')
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannerData()

    console.log(app.globalData)

    this.getRecommendResourceData()
  },

  //推荐歌单
  getRecommendResourceData(){
    //  /recommend/resource
    request(app.globalData.baseUrl + '/recommend/resource', {
      cookie: app.globalData.cookie
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },

  //轮播图
  getBannerData(){
    //0: pc 1: android  2: iphone 3: ipad

    let type = 0

    //根据系统和型号获取对应的轮播图数据
    wx.getSystemInfo({
      success: (result) => {
        let systemInfo = result.system
        let modelInfo = result.model

        if(systemInfo.indexOf('Android') !== -1) {
          type = 1
        }else if(systemInfo.indexOf('iOS') === 0 && modelInfo.indexOf('iPhone') === 0) {
          type = 2
        } else if(systemInfo.indexOf('iOS') === 0 && modelInfo.indexOf('iPad') === 0){
          type = 3
        }
        console.log(result.system)
        console.log(result.model)
      }
    })

    request(app.globalData.baseUrl+'/banner',{
      type
    })
    .then(res=>{
      console.log(res)

      this.setData({
        banners: res.data.banners
      })
    })
    .catch(err=>{
      console.log(err)
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