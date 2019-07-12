const Insert = {
  insertLunboAd: ($elem, index, data) => {
    const str = `<li class="lunbo-page">${data}</li>`
    $elem.find('li').eq(index).before(str)
  },
  insertWechat: ($elem, index, data) => {
    $elem.find('section').eq(index).before(data)
  }
}

module.exports = Insert



// WEBPACK FOOTER //
// ./src/js/insertHtml.js