// HTML生成器
const Util = require('./Util.js/index.js')

const Generate = {
    // 首页推荐位广告
    indexAdString: {
        3: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41788" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41788");</script></section>',
        8: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41789" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41789");</script></section>',
        13: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41790" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41790");</script></section>',
        18: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41791" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41791");</script></section>',
        23: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41792" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41792");</script></section>',
        28: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41793" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41793");</script></section>',
        33: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41794" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41794");</script></section>',
        38: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41795" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41795");</script></section>'
    },
    // 频道推荐位广告
    adString: {
        3: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41559" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41559");</script></section>',
        8: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41560" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41560");</script></section>',
        13: '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_41561" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41561");</script></section>'
    },
    // 轮播图广告
    lunboAdString: {
        index: '<section><div id="AD_SURVEY_POSITION_SIMPLE_41197" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41197");</script></section>',
        channels: '<section><div id="AD_SURVEY_POSITION_SIMPLE_41562" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("41562");</script></section>'
    },
    // return 轮播图
    lunboHtml: (id, data) => {
        let str = `<div class="lunbo" id="${id}"><ul class="lunbo-wrapper">`
        for (let item in data) {
            data[item].title = Util.generateTitle(data[item].title, 16)
            str += `
        <li class="lunbo-page">
          <a href="${data[item].url}">
            <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/lunbo_image.png';" src="${data[item].pic}" alt="">
            <div class="lunbo-title-bg">
              <p class="lunbo-title">${data[item].title}</p>
            </div>
          </a>
        </li>
      `
        }
        str += '</ul></div>'
        return str
    },
    // return 首页标题头
    headerHtml: (title, children = '') => {
        let str = `
      <div class="block-header">
        <span class="block-logo">${title}</span>
        ${children}
      </div>
    `
        return str
    },
    // return 今日要闻轮播指示器
    listIndicator: (len, id) => {
        if (len <= 1) {
            return ''
        }
        let str = `
      <div class="list-indicator">
        <span class="list-indicator-curr" id="${id}">1</span>
        <span class="list-lens">/${len}</span>
      </div>
    `
        return str
    },
    // return 单个新闻HTML字符串
    newsHtml: (data, imgDisable = false) => {
        let str = ''
        let title = Util.generateTitle(data.title, 28)
        let date = Util.generateTime(data.date)
        if (typeof data.pic === 'undefined' && data.mediaType !== 'advert') {
            return ''
        }
        let recommendUl = !Util.getHash().channel && data.id ? 'recommend=ul' : '';
        if (data.url) recommendUl = data.url.indexOf('?') >= 0 ? '&' + recommendUl : '?' + recommendUl

        if (data.mediaType === 'text') {
            str += `
        <section class="news-style-0">
          <a href="${data.url}${recommendUl}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
            <div class="news-content">
              <div class="news-title">${title}</div>
              <div class="news-info">
                <span class="news-from">${data.source}</span>
                <span class="news-date">${date}</span>
              </div>
            </div>
          </a>
        </section>
      `
        } else if (data.mediaType === 'oneImg') {
            if (data.contentType === 'content_text') {
                // 单图
                str += `
          <section class="news-style-1">
            <a href="${data.url}${recommendUl}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
              <div class="news-content">
                <div class="news-title">${title}</div>
                <div class="news-info">
                  <span class="news-from">${data.source}</span>
                  <span class="news-date">${date}</span>
                </div>
              </div>
              <div class="news-imgs">
                  <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/one_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + data.pic[0] : 'src="' + data.pic[0]}" alt="">
              </div>
            </a>
          </section>
        `
            } else if (data.contentType === 'content_video') {
                str += `
          <section class="news-video">
            <a href="${data.url}${recommendUl}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
              <p class="news-title">${title}</p>
              <div class="video-img">
                <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png';" src="${data.pic[0]}" alt="">
                <div class="video-btn">
                  <svg>
                    <use xlink:href="#video-icon" />
                  </svg>
                </div>
              </div>
              <div class="news-info">
                <span class="news-from">${data.source}</span>
                <span class="news-date">${date}</span>
              </div>
            </a>
          </section>
          `
            } else if (data.contentType === 'content_picture') {
                str += `
          <section class="news-video">
            <a href="${data.url}${recommendUl}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
              <p class="news-title">${title}</p>
              <div class="video-img">
                <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png';" src="${data.pic[0]}" alt="">
              </div>
              <div class="news-info">
                <span class="news-from">${data.source}</span>
                <span class="news-date">${date}</span>
              </div>
            </a>
          </section>
        `
            } else if (data.contentType === 'shijiuda') {
                // 两会专题 临时
                str += `
          <section class="news-style-1">
            <a href="${data.url}${recommendUl}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
              <div class="news-content">
                <div class="news-title">${title}</div>
                <div class="news-info">

                  <span class="news-date">${date}</span>
                  <span class="news-special">两会专题</span>
                </div>
              </div>
              <div class="news-imgs">
                  <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/one_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + data.pic[0] : 'src="' + data.pic[0]}" alt="">
              </div>
            </a>
          </section>
        `
            }
        } else if (data.mediaType === 'moreImg') {
            // 多图
            str += `
        <section class="news-style-2">
          <a href="${data.url}${recommendUl}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
            <p class="news-title">${title}</p>
            <div class="news-imgs">
              <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + data.pic[0] : 'src="' + data.pic[0]}" alt="">
              <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + data.pic[1] : 'src="' + data.pic[1]}" alt="">
              <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + data.pic[2] : 'src="' + data.pic[2]}" alt="">
            </div>
          </a>
          <div class="news-info">
            <span class="news-from">${data.source}</span>
            <span class="news-date">${date}</span>
          </div>
        </section>
      `
        } else if (data.mediaType === 'advert') {
            // 广告
            str += `
        <div class="mock-line"></div>
        <section>
          ${data.data}
        </section>
      `
                // console.log(str)
        }
        return str
    },
    paradigm4NewsHtml: (data, imgDisable = false) => {
        let str = ''
        let title = Util.generateTitle(data.title, 28)
        let date = Util.generateTime(data.date)
        let pic = data.cover_url.split(',')

        if (pic.length === 1 && pic[0] === '') {
            str += `
        <section class="news-style-0">
          <a href="${data.url}" data-id="${data.id}" class="link-flag">
            <div class="news-content">
              <div class="news-title">${title}</div>
              <div class="news-info">
                <span class="news-from">${data.publisher_id}</span>
              </div>
            </div>
          </a>
        </section>
      `
        } else if (pic.length >= 1) {

            // 单图
            str += `
          <section class="news-style-1">
            <a href="${data.url}" data-id="${data.id}" class="link-flag">
              <div class="news-content">
                <div class="news-title">${title}</div>
                <div class="news-info">
                  <span class="news-from">${data.publisher_id}</span>
                </div>
              </div>
              <div class="news-imgs">
                  <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/one_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + pic[0] : 'src="' + pic[0]}" alt="">
              </div>
            </a>
          </section>
        `

        } else if (pic.length >= 2) {
            // 多图
            str += `
        <section class="news-style-2">
          <a href="${data.url}" data-id="${data.id}" class="link-flag">
            <p class="news-title">${title}</p>
            <div class="news-imgs">
              <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + pic[0] : 'src="' + pic[0]}" alt="">
              <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + pic[1] : 'src="' + pic[1]}" alt="">
              <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png';" class="news-pic" ${imgDisable ? 'src="" data-imgUrl="' + pic[2] : 'src="' + pic[2]}" alt="">
            </div>
          </a>
          <div class="news-info">
            <span class="news-from">${data.publisher_id}</span>
            <span class="news-date">${date}</span>
          </div>
        </section>
      `
        } else if (data.mediaType === 'advert') {
            // 广告
            str += `
        <div class="mock-line"></div>
        <section>
          ${data.data}
        </section>
      `
                // console.log(str)
        }
        return str
    },
    // return 新闻列表
    newsBlock: (id = '', children = '') => {
        let str = `
      <div class="news-block" id="${id}">
        ${children}
      </div>
    `
        return str
    },
    // return 首页新闻列表HTML字符串
    homeNewsHtml: (data) => {
        let str = '<div class="block-content" id="recommend-content"><ul class="lunbo-wrapper"><li class="lunbo-page">'
        for (let item in data) {
            if (item % 14 === 0 && +item !== 0) {
                str += '</li><li class="lunbo-page">'
            }
            str += Generate.newsHtml(data[item], !!(item > 14))
        }
        str += '</li></ul></div>'
        return str
            // let $blockContent = $('<div class="block-content" id="recommend-content"><ul class="lunbo-wrapper"></ul></div>')
            // let $ulContent = $blockContent.find('ul')
            // let newList = []
            // for (let item in data) {
            //   newList.push($(Generate.newsHtml(data[item], !!(item > 14))))
            // }
            // let $lunboPage = $('<li class="lunbo-page"></li>')
            // let index = 0
            // while (newList.length > 0) {
            //   if (index === 14) {
            //     $ulContent.append($lunboPage)
            //     $lunboPage = $('<li class="lunbo-page"></li>')
            //     index = 0
            //   }
            //   $lunboPage.append(newList.shift())
            //   index++
            // }
            // $ulContent.append($lunboPage)
            // return $blockContent
    },
    // return 图片频道
    picChannelHtml: (data) => {
        let str = `
      <section class="pic-block">
        <a href="${data.url}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
          <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png';" src="${data.pic[0]}"" alt="" />
          <p class="pic-title">${data.title}</p>
        </a>
      </section>
    `
        return str
    },
    // return 图片频道（兴趣推荐）
    picChannelHtml2: (data) => {
        let str = `
      <section class="pic-block">
        <a href="${data.url}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
          <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png';" src="${data.pic[0]}"" alt="" />
          <p class="pic-title">${data.title}</p>
        </a>
      </section>
    `
        return str
    },
    // return 视频频道
    videoChannelHtml: (data) => {
        let str = `
      <section class="pic-block">
        <a href="${data.url}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
          <div class="video-img">
            <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png';" src="${data.pic[0]}" alt="">
            <div class="video-btn">
              <svg>
                <use xlink:href="#video-icon" />
              </svg>
            </div>
          </div>
          <p class="pic-title">${data.title}</p>
        </a>
      </section>
    `
        return str
    },
    // return 视频频道（兴趣推荐）
    videoChannelHtml2: (data) => {
        let str = `
      <section class="pic-block">
        <a href="${data.url}" data-id="${data.id}" data-parameter="${data.parameter}" class="link-flag">
          <div class="video-img">
            <img onError="this.onerror=null;this.src='//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png';" src="${data.pic[0]}" alt="">
            <div class="video-btn">
              <svg>
                <use xlink:href="#video-icon" />
              </svg>
            </div>
          </div>
          <p class="pic-title">${data.title}</p>
        </a>
      </section>
    `
        return str
    },
    // return 微信热点
    wechatHtml: (data) => {
        let str = Generate.headerHtml('微信热点')
        str += '<div class="wechat-content">'
        for (let i = 0; i < 5; i++) {
            str += `
        <div class="wechat-block">
          <a href="${data[i].url}">
            <p class="wechat-title">
              ${data[i].title}
            </p>
            <p class="wechat-small">
              ${data[i].tag}
            </p>
          </a>
        </div>
      `
        }
        return str
    }
}

module.exports = Generate


// WEBPACK FOOTER //
// ./src/js/generateHtml.js