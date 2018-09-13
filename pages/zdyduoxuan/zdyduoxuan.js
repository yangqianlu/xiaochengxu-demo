// pages/zdyduoxuan/zdyduoxuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrList:[{name:'111',checked:true},{name:'222',checked:false}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  checkboxChange:function(e){
console.log(e.detail.value)
    var arrVal = e.detail.value
    var arrList = this.data.arrList
    for (let i in arrList){
      arrList[i].checked=false;
      for(let j in arrVal){
        if (arrList[i].name==arrVal[j]){
          arrList[i].checked=true
        }
      }
      this.setData({
        arrList: arrList
      })
    }
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