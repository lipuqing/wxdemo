//index.js
const app = getApp()
const api = require("../../common/api.js")
// @import "common/api.js";
Page({
  data: {
    avatarUrl: 'https://img.singschool.cn/wl/avatar/20200628184728168-731234055.jpg',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },
  onLoad: function () {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  onShow: function () {
    // 调用云函数
    let that = this 
    api.apiQuery({
      name: "query",
      data: {
        query: 'happy_h5',
        where: {
          OpenType: true
        }
      }
    },
    res => {
      console.log(res)
    })
  },
  onGetUserInfo: function (e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },
  onGetOpenid: function () {
    // 调用云函数
    api.apiQuery({
      name: "login",
      data: {
        query: 'user',
        where: {
          name: '李普青'
        }
      }
    },
    res => {
      app.globalData.openid = res.result.openid;
      this.setData({userInfo:res.result.data[0]})
    })
  }
})