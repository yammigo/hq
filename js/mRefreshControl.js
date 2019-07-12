const Event = require('./js/mEvent.js')
const GetDirection = Event.TouchMove.getDirection
const RefreshControl = function (config) {
  // 默认配置
  let defaultConifg = {
    height: 50,
    hookFunc: () => {}
  }
  // 合并配置
  config = {
    ...defaultConifg,
    ...config
  }
  // 配置项
  this.controlElem = document.getElementById(config.id)
  this.containerElem = document.getElementById(config.containerId)
  this.height = config.height
  this.hookFunc = config.hookFunc
  this.touchStartHook = config.touchStartHook
  this.touchMovingHook = config.touchMovingHook
  this.touchEndHook = config.touchEndHook
  // 全局变量
  this.startX = 0
  this.startY = 0
  this.refreshControlFlag = false
  this.direction = ''
  // Icon定制，非公用
  this.refreshIcon = document.getElementById('transform-icon')
}

RefreshControl.prototype.touchStart = function (event) {
  if (window.scrollY <= 5) {
    this.refreshControlFlag = true
  } else {
    return
  }
  GetDirection.start(event)
  this.controlElem.style.transition = 'none'
  this.controlElem.style.webkitTransition = 'none'
  this.startX = event.touches[0].clientX
  this.startY = event.touches[0].clientY
}

RefreshControl.prototype.touchMoving = function (event) {
  if (!this.refreshControlFlag) {
    return
  }
  this.direction = this.direction || GetDirection.move(event)
  if (this.direction !== 'bottom') {
    this.refreshControlFlag = false
    return
  }
  let movingY = event.touches[0].clientY
  // if (movingY > this.startY) {
  event.preventDefault()
  event.stopPropagation()
  let movedY = movingY - this.startY
  this.controlElem.style.transform = `translate3d(0, ${movedY / 2}px, 0)`
  this.controlElem.style.webkitTransform = `translate3d(0, ${movedY / 2}px, 0)`
  // Icon定制
  this.refreshIcon.style.strokeDashoffset = movedY * 25.5
  if (movedY / 2 > this.height) {
    document.getElementById('refresh-text').innerHTML = '松开刷新'
  } else {
    document.getElementById('refresh-text').innerHTML = '下拉刷新'
  }
  // }
}

RefreshControl.prototype.touchEnd = function (event) {
  this.direction = ''
  GetDirection.end()
  if (!this.refreshControlFlag) {
    return
  }
  this.refreshControlFlag = false
  if ((event.changedTouches[0].clientY - this.startY) / 2 > this.height) {
    this.controlElem.style.transform = `translate3d(0, ${this.height}px, 0)`
    this.controlElem.style.webkitTransform = `translate3d(0, ${this.height}px, 0)`
    this.hookFunc()
    document.getElementById('refresh-text').innerHTML = '刷新中...'
    this.refreshIcon.style.transition = 'all 10s linear .1s'
    this.refreshIcon.style.webkitTransition = 'all 10s linear .1s'
    this.refreshIcon.style.strokeDashoffset = 40000
  } else {
    this.controlElem.style.transform = 'translate3d(0, 0, 0)'
    this.controlElem.style.webkitTransform = 'translate3d(0, 0, 0)'
  }
}

RefreshControl.prototype.hidden = function () {
  this.controlElem.style.transition = 'all 0.2s ease-in 0.1s'
  this.controlElem.style.webkitTransition = 'all 0.2s ease-in 0.1s'
  this.controlElem.style.transform = 'translate3d(0, 0, 0)'
  this.controlElem.style.webkitTransform = 'translate3d(0, 0, 0)'
  this.refreshIcon.style.transition = 'none'
  this.refreshIcon.style.webkitTransition = 'none'
  setTimeout(() => {
    document.getElementById('refresh-text').innerHTML = '下拉刷新'
    this.refreshIcon.style.strokeDashoffset = 0
  }, 300)
}

RefreshControl.prototype.init = function () {
  this.controlElem.addEventListener('touchstart', this.touchStart.bind(this))
  this.controlElem.addEventListener('touchmove', this.touchMoving.bind(this))
  this.controlElem.addEventListener('touchend', this.touchEnd.bind(this))
}

module.exports = RefreshControl



// WEBPACK FOOTER //
// ./src/js/mRefreshControl.js