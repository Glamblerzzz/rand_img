// pages/rand_tb_img/rand_tb_img.js
import {Model} from './model'
const model = new Model()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://api.66mz8.com/api/rand.tbimg.php?format=json',
    //   success: res => {
    //     console.log(res.data.pic_url);
    //     this.setData({
    //       url: res.data.pic_url
    //     })
    //   },
    //   fail:err=>{
    //     wx.showToast({
    //       title: err,
    //       icon: 'none'
    //     })
    //   }
    // })
    model.get_rand_img().then(res=>{
      console.log(res)
    }).catch(err=>{
      wx.showToast({
        title: err,
        icon: 'none'
      })
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