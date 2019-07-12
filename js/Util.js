const Util = {
  // return 轮播图标题
  generateTitle: (title, num = 16) => {
    let count = 0
    if (!title || typeof title.length !== 'number') {
      return title
    }
    for (let i = 0, len = title.length; i < len; i++) {
      // 是否是半角
      count += /[\u0000-\u00FF]/.test(title[i]) ? 0.5 : 1
      if (count >= num) {
        return title.substr(0, i) + '…'
      }
    }
    return title
  },
  // return 时间显示格式
  generateTime: (date, currDate = +new Date()) => {
    if (typeof date === 'string') {
      date = +new Date(date.replace(/-/g, '/'))
    }
    if (isNaN(date)) {
      return ''
    }
    let diffDate = currDate - date
    // 一分钟内
    if (diffDate <= 60000) {
      return '刚刚'
    } else if (diffDate <= 3600000) {
      return ~~(diffDate / 60000) + '分钟前'
    } else if (diffDate <= 86400000) {
      return ~~(diffDate / 3600000) + '小时前'
    } else if (diffDate <= 604800000) {
      return ~~(diffDate / 86400000) + '天前'
    }
    return ((new Date(date)).getMonth() + 1) + '月' + (new Date(date)).getDate() + '日'
  },
  // return search对象
  getSearch: () => {
    let searchObject = {}
    let searchArr = location.search.substr(1).split('&')
    searchArr.forEach((item, index) => {
      let [name, value] = item.split('=')
      if (name.length) {
        searchObject[name] = value
      }
    })
    return searchObject
  },
  // 通过字符串
  // return search对象
  getSearchByString: (urlStr) => {
    if (urlStr.indexOf('?') < 0) {
      return {}
    }
    let searchObject = {}
    let searchArr = urlStr.split('?')[1].split('&')
    searchArr.forEach((item, index) => {
      let [name, value] = item.split('=')
      if (name.length) {
        searchObject[name] = value
      }
    })
    return searchObject
  },
  // return hash对象
  getHash: () => {
    let hashObject = {}
    let hashArr = location.hash.substr(1).split('&')
    hashArr.forEach((item, index) => {
      let [name, value] = item.split('=')
      if (name.length) {
        hashObject[name] = value
      }
    })
    return hashObject
  },
  // return UUID
  getId: (len = 36) => {
    let str = ''
    const base = '0123456789abcdef'
    for (let i = 0; i < len; i++) {
      str += base[~~(Math.random() * 16)]
    }
    return str
  },
  // 设置cookie
  setCookie: (key, value, expiredays) => {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = key + '=' + escape(value) +
    ((expiredays == null) ? '' : ';expires=' + exdate.toGMTString())
  },
  // 得到cookie
  getCookie: (key) => {
    if (document.cookie.length > 0) {
      let cookieStart = document.cookie.indexOf(key + '=')
      if (cookieStart !== -1) {
        cookieStart = cookieStart + key.length + 1
        let cookieEnd = document.cookie.indexOf(';', cookieStart)
        if (cookieEnd === -1) {
          cookieEnd = document.cookie.length
        }
        return unescape(document.cookie.substring(cookieStart, cookieEnd))
      }
    }
    return ''
  },
  // 懒加载图片 依赖zepto
  setImgUrl: ($elem) => {
    let $imgElems = $elem.find('img')
    $.each($imgElems, function (index, item) {
      let $item = $(item)
      if ($item.attr('data-imgUrl') !== undefined &&
            $item.attr('src') !== $item.attr('data-imgUrl')) {
        $item.attr('src', $item.attr('data-imgUrl'))
        $item.removeAttr('data-imgUrl')
      }
    })
  }
}

module.exports = Util



// WEBPACK FOOTER //
// ./src/js/Util.js