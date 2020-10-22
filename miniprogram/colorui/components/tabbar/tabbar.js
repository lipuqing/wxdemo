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
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nomine.png?sign=a460593dbf5d6b1daecf02fa68a6bfd7&t=1603334426',
      name: '发现',
      url:'/pages/index/index'
    }, {
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nomine.png?sign=a460593dbf5d6b1daecf02fa68a6bfd7&t=1603334426',
      name: '发现',
      url:'/pages/index/index'
    },{
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nomine.png?sign=a460593dbf5d6b1daecf02fa68a6bfd7&t=1603334426',
      name: '发现',
      url:'/pages/index/index'
    },{
      img: 'https://6474-dtf1v1-c6f838-1255670685.tcb.qcloud.la/icon/icon_nomine.png?sign=a460593dbf5d6b1daecf02fa68a6bfd7&t=1603334426',
      name: '我的',
      url:'/pages/databaseGuide/databaseGuide'
    }]
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
    jump(e){
      console.log(e.currentTarget.dataset.url)
    }
  }
})