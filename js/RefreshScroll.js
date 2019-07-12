const Event = require('./js/Event.js/index.js')

const RefreshScroll = function (config) {
  // 默认配置
  let defaultConfig = {
    getData: function () {}
  }
  // 合并配置
  config = {
    ...defaultConfig,
    ...config
  }

  // 全局变量
  this.getData = config.getData
  this.screenHeight = screen.height
  this.bodyHeight = document.body.clientHeight
}

RefreshScroll.prototype.watch = function () {
  this.bodyHeight = document.body.clientHeight
  if (window.scrollY > this.bodyHeight - this.screenHeight * 1.2) {
    this.getData()
    this.bodyHeight = document.body.clientHeight
  }
}

RefreshScroll.prototype.init = function () {
  Event.addEvent(window, 'scroll', this.watch.bind(this))
}

module.exports = RefreshScroll



// WEBPACK FOOTER //
// ./src/js/RefreshScroll.js