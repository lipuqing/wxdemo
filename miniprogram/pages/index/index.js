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
    requestResult: '',
    pagesData:{}
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
        query: 'pages_index',
        where: {
          query: "index"
        }
      }
    },
    res => {
      console.log(res.result.data[0])
      that.setData({
        pagesData:res.result.data[0]
      })
      // app.globalData.openid = res.result.openid;
      // this.setData({userInfo:res.result.data[0]})
    })
  },
  jump(){
    wx.navigateTo({
      url: '/pages/2048/2048',
    })
  },
})