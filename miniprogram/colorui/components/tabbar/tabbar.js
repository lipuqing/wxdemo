const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    },
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    tabIndex: {
      type: [Number,String],
      default: 0
    },
    bgImage: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    icon: [{
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nofound.png?sign=e65f6596ace68dc9df08046226bb113a&t=1603684202',
      curr_img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_found.png?sign=c825adbcffa439fa0e3fb2e091496492&t=1603684219',
      name: '首页',
      url: '/pages/index/index'
    },  {
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nofound.png?sign=e65f6596ace68dc9df08046226bb113a&t=1603684202',
      curr_img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_found.png?sign=c825adbcffa439fa0e3fb2e091496492&t=1603684219',
      name: '发现',
      url: '/pages/index/index'
    }, {
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nofound.png?sign=e65f6596ace68dc9df08046226bb113a&t=1603684202',
      curr_img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_found.png?sign=c825adbcffa439fa0e3fb2e091496492&t=1603684219',
      name: '发现',
      url: '/pages/index/index'
    }, {
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nomine.png?sign=a460593dbf5d6b1daecf02fa68a6bfd7&t=1603334426',
      curr_img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_mine.png?sign=cc55a7c353d27bf5fb12082a199fad45&t=1603684179',
      name: '我的',
      url: '/pages/index/index'
    }, ]
  },
  onShow(){
    console.log(this.properties)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
    },
    toHome() {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    },
    jump(e) {
      console.log(e.currentTarget.dataset.url)
    }
  }
})