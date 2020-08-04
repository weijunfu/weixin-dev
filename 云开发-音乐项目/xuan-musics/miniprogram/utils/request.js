//定制Request请求
module.exports = (url, data)=>{
  return new Promise((resolve, reject)=>{
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    
    wx.request({
      url,
      data,
      success(res){
        resolve(res)
        wx.hideLoading()
      },
      fail(err){
        reject(err)
        wx.hideLoading()
      }
    })
  })
}
