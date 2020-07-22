// pages/rand_tb_img/rand_tb_img.js
const db = wx.cloud.database()
const rand_img = db.collection('rand_img')
import { Model } from './model'
const model = new Model()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url_list: []
  },
  //插入云开发数据库
  insert_db(url, count) {
    rand_img.add({
      data: {
        url: url
      }
    }).then(res => {
      this.get_url(count)
    }).catch(err => {
      this.get_url(count)
    })
  },
  // 获取接口数据
  get_url(count) {
    let msg = {}
    let list = []
    if (count < 1) {
      wx.hideLoading()
      return
    }
    wx.showLoading({
      title: '加载中',
    })
    model.get_rand_img().then(res => {
      msg.url = res.pic_url
      list = this.data.url_list
      list.push(msg)
      this.setData({
        url_list: list
      })
      --count
      this.insert_db(res.pic_url, count)
    }).catch(err => {
      wx.showToast({
        title: err,
        icon: 'none'
      })
    })
  },
  show_full(e) {    
    wx.previewImage({
      urls: [e.currentTarget.dataset.url],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_url(5)
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
    this.get_url(5)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})