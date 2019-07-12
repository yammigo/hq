/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// 手动列表 公司接口
	// 首页自动列表 优路接口    频道页自动列表 公司接口
	// 依赖zepto
	(function () {
	    // 依赖引入
	    var Lunbo = __webpack_require__(1); // 轮播图
	    var RefreshControl = __webpack_require__(3); // 下拉刷新
	    var RefreshScroll = __webpack_require__(4); // 滚动条自动列表
	    var Util = __webpack_require__(6); // 多种工具
	    var Generate = __webpack_require__(7); // 用于生成html代码
	    var Insert = __webpack_require__(8); // 页面中插入html 用于插入广告
	    // 配置项
	    var lunboBlockID = 'lunbo'; // 轮播图ID
	    var todayBlockID = 'first-news'; // 今日要闻区块ID
	    var autoBlockID = 'interesting-news'; // 兴趣推荐区块ID
	    var channelBlockID = 'channel-news'; // 其他频道ID
	    var wechatIndex = 41; // 微信热点位置
	    // 全局变量
	    var $content = $('#content'); // app content
	    var FontSize = parseFloat($('html').css('font-size')); // 1rem = FontSize px
	    var $refresh = $('#refresh-control'); // 下拉刷新
	    var $refreshIcon = $('#transform-icon'); // 下拉动画
	
	    var tipEnable = !Util.getCookie('tipDisable'); // 是否显示tip
	    var userID = Util.getCookie('userID'); // 用户信息
	    if (!userID) {
	        userID = Util.getId();
	        Util.setCookie('userID', userID, 365 * 10);
	    }
	    // cnzz统计
	    var Channels = {
	        'all': {
	            name: '全站',
	            'cnzzId': '1257582039'
	        },
	        'index': {
	            name: '首页',
	            'cnzzId': '1257822579'
	        },
	        'world': {
	            name: '国际',
	            'cnzzId': '1262434260'
	        },
	        'taihai': {
	            name: '台海',
	            'cnzzId': '1262434298'
	        },
	        'society': {
	            name: '社会',
	            'cnzzId': '1262434313'
	        },
	        'mil': {
	            name: '军事',
	            'cnzzId': '1262434136'
	        },
	        'editorial': {
	            name: '社评',
	            'cnzzId': '1262434337'
	        },
	        'inland': {
	            name: '国内',
	            'cnzzId': '1262434373'
	        },
	        'comment': {
	            name: '评论',
	            'cnzzId': '1262434392'
	        },
	        'oversea': {
	            name: '海外看中国',
	            'cnzzId': '1262434429'
	        },
	        'bolan': {
	            name: '博览',
	            'cnzzId': '1262434444'
	        },
	        'picture': {
	            name: '图片',
	            'cnzzId': '1262434462'
	        },
	        'video': {
	            name: '视频',
	            'cnzzId': '1262434473'
	        },
	        'finance': {
	            name: '财经',
	            'cnzzId': '1262434499'
	        },
	        'auto': {
	            name: '汽车',
	            'cnzzId': '1262434511'
	        },
	        'tech': {
	            name: '科技',
	            'cnzzId': '1262434523'
	        },
	        'smart': {
	            name: '智能',
	            'cnzzId': '1262434529'
	        },
	        'shanrenping': {
	            name: '单仁平',
	            'cnzzId': '1262434542'
	        },
	        'uav': {
	            name: '无人机',
	            'cnzzId': '1262434565'
	        },
	        'travel': {
	            name: '旅行',
	            'cnzzId': '1262434574'
	        },
	        'health': {
	            name: '健康',
	            'cnzzId': '1262434596'
	        },
	        'ent': {
	            name: '娱乐',
	            'cnzzId': '1262434603'
	        },
	        'fashion': {
	            name: '时尚',
	            'cnzzId': '1262434611'
	        },
	        'women': {
	            name: '女人',
	            'cnzzId': '1262434654'
	        },
	        'sports': {
	            name: '体育',
	            'cnzzId': '1262434664'
	        },
	        'ski': {
	            name: '滑雪',
	            'cnzzId': '1262434670'
	        },
	        'liuxue': {
	            name: '留学',
	            'cnzzId': '1262434698'
	        },
	        'hope': {
	            name: '公益',
	            'cnzzId': '1262434712'
	        },
	        'city': {
	            name: '城市',
	            'cnzzId': '1262434722'
	        }
	    };
	
	    var App = {
	        channel: '', // 当前频道
	        homeFlag: true, // 是否首页
	        picChannelFlag: false, // 是否图集页样式
	        videoChannelFlag: false, // 是否视频频道
	        times: 0, // 请求次数
	        date: '', // 最后一条新闻时间
	        url: '//w.huanqiu.com/apps/huanqiu/mindex.php', // 首页接口
	        // autoUrl: `//uluai.com.cn/rcmd/falls/getRtCmd?siteId=5011&cki=${userID}&num=20&chan=`, // 首页自动接口
	        autoUrl: '//tj.qipus.cn/rcmd/falls/getRtCmd?siteId=5011&cki=' + userID + '&num=20&chan=', // 首页自动接口
	        loading: false, // 是否正在加载
	        lazyFlag: false, // 简易懒加载标志
	        // apiFlag: false,                                           // true: 公司接口  false: 优路接口
	        apiCount: 0, // api出错计数，>=3: 使用公司接口
	        swiperData: '', // 轮播图数据
	        positionData: '', // 人工推荐数据
	        wechatData: '', // 微信热点数据
	        autoData: '', // 自动推荐数据
	        count: 0, // 自动列表新闻数量统计
	        manualAjax: null,
	        autoAjax: null,
	
	        // 初始化 导航点击事件、导航更多功能
	        initNav: function initNav() {
	            // nav更多点击事件
	            $('#nav-more-btn').on('click', function (event) {
	                var $this = $(this);
	                event.preventDefault();
	                if (!$this.hasClass('active')) {
	                    $this.addClass('active');
	                    if ($this.parents('nav').css('position') !== 'fixed') {
	                        $('#nav-more').css('height', window.innerHeight + $(window).scrollTop() - 2.5 * FontSize + 'px');
	                    } else {
	                        $('#nav-more').css('height', window.innerHeight - 1.25 * FontSize + 'px');
	                    }
	                    $('#nav-more').css('opacity', '1');
	                    $('body').css('overflow', 'hidden');
	                    $('nav').css('border-bottom', '1px solid #e5e5e5');
	                } else {
	                    $this.removeClass('active');
	                    $('#nav-more').css('height', '0');
	                    $('#nav-more').css('opacity', '0');
	                    $('body').css('overflow', 'visible');
	                    $('nav').css('border-bottom', '2px solid #910910');
	                }
	            });
	            // nav阻止滚动
	            $('#nav-more').on('touchmove', function (event) {
	                event.preventDefault();
	                event.stopPropagation();
	            });
	            // 监听滚动条
	            $(window).on('scroll', function () {
	                if (window.scrollY > 1.25 * FontSize) {
	                    $('nav').css('position', 'fixed');
	                } else {
	                    $('nav').css('position', 'relative');
	                }
	            });
	            this.setNavPos();
	        },
	        initAd: function initAd() {
	            $.ajax({
	                type: 'GET',
	                dataType: 'jsonp',
	                url: 'https://3w.huanqiu.com/api/ad?agt=9',
	                success: function success(results) {
	                    if (results.code === 200) {
	                        sessionStorage.setItem('ad', JSON.stringify(results.data));
	                    }
	                }
	            });
	        },
	        // 设置 导航位置
	        setNavPos: function setNavPos() {
	            var $scrollNav = $('.nav-main');
	            var $activeNav = $scrollNav.find('.active');
	            $scrollNav.scrollLeft($activeNav[0].offsetLeft);
	        },
	        // 初始化 添加主屏提示 是否可见
	        initTip: function initTip() {
	            var userAgent = navigator.userAgent;
	            // 添加到屏幕tip
	            if (tipEnable && userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1 && userAgent.indexOf('Browser') < 0) {
	                document.getElementById('add-screen-tip').style.display = 'block';
	            } else {
	                document.getElementById('add-screen-tip').style.display = 'none';
	            }
	            $('#tip-close').on('click', function (event) {
	                event.stopPropagation();
	                $('#add-screen-tip').css('display', 'none');
	                Util.setCookie('tipDisable', true, 1);
	            });
	        },
	        // 设置 当前频道，调用 设置导航位置方法
	        setChannel: function setChannel() {
	            // 频道相关属性设置
	            $('#footer-text').css('display', 'block');
	            this.channel = Util.getHash().channel || '';
	            this.homeFlag = !this.channel;
	            this.picChannelFlag = this.channel === 'picture';
	            this.videoChannelFlag = this.channel === 'video';
	            this.times = 0;
	            this.date = '';
	            this.count = 0;
	            if (this.homeFlag) {
	                this.url = '//w.huanqiu.com/apps/huanqiu/mindex.php';
	                // this.autoUrl = `//uluai.com.cn/rcmd/falls/getRtCmd?siteId=5011&cki=${userID}&num=20&chan=`
	                this.autoUrl = '//tj.qipus.cn/rcmd/falls/getRtCmd?siteId=5011&cki=' + userID + '&num=20&chan=';
	            } else {
	                this.url = '//w.huanqiu.com/apps/huanqiu/category.php?cname=' + this.channel;
	                this.autoUrl = '//w.huanqiu.com/apps/huanqiu/autolist.php?chan=' + this.channel + '&times=' + this.times + '&date=' + this.date;
	            }
	            // 折叠更多频道显示、修改导航样式等等频道相关UI设置
	            if ($('#nav-more').height() > 50) {
	                $('#nav-more-btn').trigger('click');
	            }
	            $('.nav-main .nav-item').removeClass('active');
	            if (this.channel === '') {
	                $('#index').addClass('active');
	            } else {
	                $('#' + this.channel).addClass('active');
	            }
	            if (this.homeFlag) {
	                $('body').css('background', '#f0f0f0');
	            } else {
	                $('body').css('background', '#fff');
	            }
	        },
	        // initVote: function () {
	        //   // 第一话题，设置正方比例
	        //   let votePercent = $('#topic-vote-bar').attr('data-percent')
	        //   $('#topic-vote-bar').css('background-image', `linear-gradient(to right, #d0021b 0%, #d0021b ${votePercent}, #4a90e2 ${votePercent}, #4a90e2`)
	        //   $('#topic-vote-bar').css('background-image', `-webkit-linear-gradient(to right, #d0021b 0%, #d0021b ${votePercent}, #4a90e2 ${votePercent}, #4a90e2`)
	        // },
	        // 初始化 滚动刷新
	        initRefreshScroll: function initRefreshScroll() {
	            var _this = this;
	
	            new RefreshScroll({
	                getData: function getData() {
	                    _this.getAuto().done(function (data) {
	                        _this.setAuto(data);
	                    });
	                }
	            }).init();
	        },
	        // 初始化 所有链接，添加优路回调方法
	        initLink: function initLink() {
	            $('#content').on('click', '.link-flag', function (event) {
	                var target = event.target || event.srcElement;
	                var $trigger = $(target).parents('.link-flag');
	                var id = $trigger.attr('data-id');
	                var parameter = $trigger.attr('data-parameter');
	                Util.setCookie('bodyTop', window.scrollY, 1);
	                if (id === 'undefined' || parameter === 'undefined') {
	                    if ($trigger.parents('#interesting-news').length > 0) {
	                        $.ajax({
	                            type: 'GET',
	                            url: '//w.huanqiu.com/apps/huanqiu/addhit.php?chan=index'
	                        });
	                    }
	                    return;
	                }
	                $.ajax({
	                    type: 'GET',
	                    url: '//tj.qipus.cn/rcmd/rec/falls/click?siteId=5011&recId=' + id + '&parameter=' + parameter + '&cki=' + userID,
	                    dataType: 'jsonp'
	                });
	            });
	        },
	        // 获得 人工推荐接口数据
	        // 目前该函数每次调用是，必须在done回调中调用setManual
	        getManual: function getManual() {
	            var _this2 = this;
	
	            this.swiperData = null;
	            this.positionData = null;
	            this.wechatData = null;
	            this.manualAjax = $.ajax({
	                type: 'GET',
	                url: this.url,
	                dataType: 'jsonp'
	            });
	            // 加载中提示
	            $refresh.css('-webkit-transform', 'translate3d(0, ' + 1.2 * FontSize + 'px, 0)');
	            $refresh.css('transform', 'translate3d(0, ' + 1.2 * FontSize + 'px, 0)');
	            $refreshIcon.css('transition', 'all 10s linear .1s');
	            $refreshIcon.css('-webkit-transition', 'all 10s linear .1s');
	            $refreshIcon.css('stroke-dashoffset', 30000);
	            $('#refresh-text').text('刷新中...');
	            this.manualAjax.done(function (data) {
	                // 存储缓存
	                try {
	                    sessionStorage.setItem(_this2.channel + 'manualData', JSON.stringify(data));
	                } catch (err) {
	                    console.log(err);
	                }
	                setTimeout(function () {
	                    _this2.refreshControl.hidden();
	                }, 1500);
	            }).fail(function () {
	                console.error('加载数据出错，正在重试~');
	            });
	            return this.manualAjax;
	        },
	        // 设置 手工推荐位，包括 轮播图，今日要闻等
	        setManual: function setManual(data) {
	            var _this3 = this;
	
	            if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	                return;
	            }
	            this.swiperData = data.swiper;
	            this.positionData = data.position;
	            this.wechatData = data.wechat;
	            // 设置 轮播图
	            if (!this.picChannelFlag && !this.videoChannelFlag && this.swiperData['0'] !== undefined) {
	                $content.prepend(Generate.lunboHtml(lunboBlockID, this.swiperData));
	                // 轮播图广告
	                var lunboAd = this.homeFlag ? Generate.lunboAdString.index : Generate.lunboAdString.channels;
	                Insert.insertLunboAd($content, 1, lunboAd);
	                new Lunbo({
	                    id: lunboBlockID,
	                    hasArrow: false,
	                    auto: false
	                }).init();
	            }
	            // 设置 今日要闻
	            var getData = function getData() {
	                _this3.times = 0;
	                _this3.date = '';
	                _this3.count = 0;
	                $content[0].innerHTML = '';
	                _this3.setManual({
	                    swiper: _this3.swiperData,
	                    position: _this3.positionData
	                });
	                _this3.getAuto().done(function (data, status, xhr) {
	                    _this3.setAuto(data);
	                });
	            };
	            // 首页样式
	            if (this.homeFlag) {
	                var indicatorID = 'recommend-index-curr';
	                var pagesNum = Math.ceil(this.positionData.length / 14);
	                var todayHeader = Generate.headerHtml('今日要闻', Generate.listIndicator(pagesNum, indicatorID));
	                $('#' + lunboBlockID).after(Generate.newsBlock(todayBlockID, todayHeader));
	                var homeNewsHtml = Generate.homeNewsHtml(this.positionData);
	                // $('#' + todayBlockID)[0].innerHTML += homeNewsHtml
	                $('#' + todayBlockID).append(homeNewsHtml);
	                // this.positionData = null
	                if (pagesNum > 1) {
	                    var $recomContent = $('#recommend-content');
	                    var recommendLunbo = new Lunbo({
	                        id: 'recommend-content',
	                        hasArrow: false,
	                        auto: false
	                    });
	                    // 改变后期添加的指示器
	                    recommendLunbo.play = function (n) {
	                        // 设置每一页的高度
	                        $('.lunbo-page').css('height', 'auto');
	                        $recomContent.height($recomContent.find('li').eq(this._n).height());
	                        Lunbo.prototype.play.bind(this, n)();
	                        // 依赖于Lunbo中的全局变量this._n
	                        if ($('#' + indicatorID).length !== 0) {
	                            $('#' + indicatorID)[0].innerHTML = this._n + 1;
	                        }
	                        // 懒加载
	                        if (!this.lazyFlag) {
	                            Util.setImgUrl($content);
	                            this.lazyFlag = true;
	                        }
	                    };
	                    recommendLunbo.init();
	                    // 重置一个高度
	                    // setTimeout(() => {
	                    //   $recomContent.height($recomContent.find('li').eq(0).height())
	                    // }, 600)
	                    getData = function getData() {
	                        _this3.times = 0;
	                        _this3.date = '';
	                        _this3.count = 0;
	                        $('#' + autoBlockID).remove();
	                        sessionStorage.clear();
	                        recommendLunbo.setIndex(1);
	                        recommendLunbo.play();
	                        _this3.getAuto().done(function (data) {
	                            _this3.setAuto(data);
	                        });
	                    };
	                }
	                // 图集页样式
	            } else if (this.picChannelFlag) {
	                for (var item in this.swiperData) {
	                    $content.append(Generate.picChannelHtml(this.swiperData[item]));
	                }
	                // 视频页
	            } else if (this.videoChannelFlag) {
	                for (var _item in this.swiperData) {
	                    $content.append(Generate.videoChannelHtml(this.swiperData[_item]));
	                }
	                // 其他
	            } else {
	                var str = '';
	                for (var _item2 in this.positionData) {
	                    str += Generate.newsHtml(this.positionData[_item2]);
	                    $content.append(Generate.newsHtml(this.positionData[_item2]));
	                }
	                // if (!$('#' + lunboBlockID).after(str)) {
	                //   $content.prepend(str)
	                // }
	            }
	            // 下拉刷新
	            this.refreshControl = new RefreshControl({
	                id: 'refresh-control',
	                height: FontSize * 1.5,
	                hookFunc: getData
	            });
	            this.refreshControl.init();
	        },
	        // 获得 自动推荐数据
	        getAuto: function getAuto() {
	            var _this4 = this;
	
	            if (this.homeFlag) {
	                //
	                if (this.apiCount >= 3) {
	                    sessionStorage.setItem('paradigm4', 'false');
	                    this.autoUrl = '//w.huanqiu.com/apps/huanqiu/autolist.php?chan=index&times=' + this.times + '&date=' + this.date;
	                } else {
	                    var requestID = randomStr(8);
	                    sessionStorage.setItem('paradigm4', 'true');
	                    this.autoUrl = 'https://nbrecsys.4paradigm.com/api/v0/recom/recall?requestID=' + requestID + '&sceneID=635&userID=' + userID;
	                    // this.autoUrl = `//tj.qipus.cn/rcmd/falls/getRtCmd?siteId=5011&cki=${userID}&num=20&chan=`
	                }
	                // this.autoUrl = this.apiCount >= 3 ? `//w.huanqiu.com/apps/huanqiu/autolist.php?chan=index&times=${this.times}&date=${this.date}` :
	                //     `https://nbrecsys.4paradigm.com/api/v0/recom/recall?requestID=${requestID}&sceneID=635&userID=${userID}`
	                //     //  `//tj.qipus.cn/rcmd/falls/getRtCmd?siteId=5011&cki=${userID}&num=20&chan=`
	                //     // _czc.push(['_trackPageview',`/falls/getRtCmd?siteId=5011&cki=${userID}&num=20&chan=`, '//uluai.com.cn/rcmd/'])
	            } else {
	                this.autoUrl = '//w.huanqiu.com/apps/huanqiu/autolist.php?chan=' + this.channel + '&times=' + this.times + '&date=' + this.date;
	                // _czc.push(['_trackPageview',`/huanqiu/autolist.php?chan=${this.channel}&times=${this.times}&date=${this.date}`, '//w.huanqiu.com/apps/'])
	            }
	            this.autoData = [];
	            if (!this.loading) {
	                this.loading = true;
	                if (this.homeFlag && sessionStorage.getItem('paradigm4') === 'true') {
	                    this.autoAjax = $.ajax({
	                        type: 'POST',
	                        url: this.autoUrl,
	                        data: '{}'
	                    });
	                } else {
	                    this.autoAjax = $.ajax({
	                        type: 'GET',
	                        dataType: 'jsonp',
	                        url: this.autoUrl
	                    });
	                }
	
	                // $('#footer-text').text('正在加载中')
	                this.autoAjax.done(function (data) {
	                    try {
	                        // 兴趣推荐区块接口请求统计
	                        if (_this4.autoUrl.indexOf('paradigm') != '-1') {
	                            //第四范式接口统计
	                            $.get('/apps/huanqiu/tongji_reco.php?api=paradigm');
	                        } else if (_this4.autoUrl.indexOf('tj.qipus.cn') != '-1') {
	                            //优路接口统计
	                            $.get('/apps/huanqiu/tongji_ul.php?api=1');
	                        }
	
	                        if (typeof data === 'string') {
	                            data = JSON.parse(data);
	                        } else if (typeof data.data !== 'undefined') {
	                            data = data.data;
	                        } else {
	                            for (var d in data) {
	                                data[d].url = data[d].url + '&recommend=ul';
	                            }
	                        }
	
	                        if (data === '' || !data.length) {
	                            $('#footer-text').css('display', 'none');
	                            return;
	                        }
	                        // 存储缓存
	                        var storage = sessionStorage.getItem(_this4.channel + 'autoData');
	                        if ('' + storage === 'null') {
	                            sessionStorage.setItem(_this4.channel + 'autoData', JSON.stringify(data));
	                        } else {
	                            sessionStorage.setItem(_this4.channel + 'autoData', storage.slice(0, -1) + ', ' + JSON.stringify(data).substr(1));
	                        }
	                        _this4.times++;
	                        _this4.date = data[data.length - 1].date;
	                    } catch (err) {
	                        if (_this4.homeFlag) {
	                            _this4.apiCount++;
	                        }
	                        console.error(err);
	                    } finally {
	                        _this4.loading = false;
	                    }
	                }).fail(function () {
	                    if (_this4.homeFlag) {
	                        _this4.apiCount++;
	                    }
	                    _this4.loading = false;
	                    console.error('加载数据出错，将重试~');
	                });
	                return this.autoAjax;
	            }
	            return { done: function done() {} };
	        },
	        // 设置 自动推荐数据
	        setAuto: function setAuto(data) {
	            var _this5 = this;
	
	            if (typeof data.data !== 'undefined') {
	                data = data.data;
	            }
	            if (typeof data === 'string') {
	                data = JSON.parse(data);
	            }
	            this.autoData = data;
	            this.loading = false;
	
	            setTimeout(function () {
	                _this5.refreshControl.hidden();
	            }, 500);
	            var agt = sessionStorage.getItem('agt') || 'huanqiu';
	            // 首页情况
	            if (this.homeFlag) {
	                var $autoBlock = $('#' + autoBlockID);
	                if ($autoBlock.length <= 0) {
	                    var autoHeader = Generate.headerHtml('兴趣推荐');
	                    $content.append(Generate.newsBlock(autoBlockID, autoHeader));
	                }
	                $autoBlock = $('#' + autoBlockID);
	                // ---- 从3w后台获取广告,替换[3,8]位置 ----
	                var ad = JSON.parse(sessionStorage.getItem('ad')),
	                    ad_pos = [3, 8],
	                    ad_count = 0,
	                    adAgtData = {};
	                for (var n in ad) {
	                    if (ad[n].pos.indexOf('feed') >= 0 && ad[n].pos.indexOf(agt) >= 0) {
	                        if (ad[n].code.indexOf('feed') >= 0) {
	                            adAgtData[ad_pos[ad_count]] = '<div class="mock-line"></div><section class="ad-content">' + ad[n].code + '</section>';
	                        } else {
	                            adAgtData[ad_pos[ad_count]] = '<div class="mock-line"></div><section class="ad-content"><div id="AD_SURVEY_POSITION_SIMPLE_' + ad[n]._id + '" style="display:none;"></div><script type="text/javascript">window.AD_SURVEY_Add_AdPos_Simple && AD_SURVEY_Add_AdPos_Simple("' + ad[n]._id + '");</script></section>';
	                        }
	                        ad_count++;
	                    }
	                }
	                // ---- 从3w后台获取广告,替换[3,8]位置 ----
	                for (var item in this.autoData) {
	                    if (sessionStorage.getItem('paradigm4') === 'true') {
	                        var el = $(Generate.paradigm4NewsHtml(this.autoData[item]))[0];
	                        if (el) el.refItem = this.autoData[item];
	                        $autoBlock.append(el);
	                    } else {
	                        var _el = $(Generate.newsHtml(this.autoData[item]))[0];
	                        if (_el) _el.refItem = this.autoData[item];
	                        $autoBlock.append(_el);
	                    }
	                    this.count++;
	                    if (adAgtData[this.count]) {
	                        $autoBlock.append(adAgtData[this.count]);
	                    } else {
	                        Generate.indexAdString[this.count] && $autoBlock.append(Generate.indexAdString[this.count]);
	                    }
	                }
	                // 图片集
	            } else if (this.picChannelFlag) {
	                for (var _item3 in this.autoData) {
	                    var _el2 = $(Generate.picChannelHtml(this.autoData[_item3]))[0];
	                    if (_el2) _el2.refItem = this.autoData[_item3];
	                    $content.append(_el2);
	                    // $content.append(Generate.picChannelHtml(this.autoData[item]))
	                }
	                // 视频
	            } else if (this.videoChannelFlag) {
	                for (var _item4 in this.autoData) {
	                    var _el3 = $(Generate.videoChannelHtml(this.autoData[_item4]))[0];
	                    if (_el3) _el3.refItem = this.autoData[_item4];
	                    $content.append(_el3);
	                    // $content.append(Generate.videoChannelHtml(this.autoData[item]))
	                }
	                // 其他
	            } else {
	                for (var _item5 in this.autoData) {
	                    var _el4 = $(Generate.newsHtml(this.autoData[_item5]))[0];
	                    if (_el4) _el4.refItem = this.autoData[_item5];
	                    $content.append(_el4);
	                    // $content.append(Generate.newsHtml(this.autoData[item]))
	                    this.count++;
	                    Generate.adString[this.count] && $content.append(Generate.adString[this.count]);
	                }
	            }
	        },
	        // 发送cnzz统计
	        postStatistical: function postStatistical() {
	            var cnzzImg = document.getElementById('cnzzquest');
	            var cnzzAllImg = document.getElementById('cnzzall');
	
	            if (!cnzzAllImg) {
	                cnzzAllImg = document.createElement('img');
	                cnzzAllImg.id = 'cnzzall';
	                cnzzAllImg.width = '0';
	                cnzzAllImg.height = '0';
	                cnzzAllImg.style.display = 'none';
	                document.body.appendChild(cnzzAllImg);
	            }
	            cnzzAllImg.src = '//c.cnzz.com/wapstat.php?siteid=' + Channels.all.cnzzId + '&r=&rnd=' + Math.floor(Math.random() * 1e10);
	
	            if (Channels[this.channel || 'index']) {
	                var cnzzUrl = '//c.cnzz.com/wapstat.php?siteid=' + Channels[this.channel || 'index'].cnzzId + '&r=&rnd=' + Math.floor(Math.random() * 1e10);
	                if (cnzzImg) {
	                    cnzzImg.src = cnzzUrl;
	                } else {
	                    cnzzImg = document.createElement('img');
	                    cnzzImg.id = 'cnzzquest';
	                    cnzzImg.src = cnzzUrl;
	                    cnzzImg.width = '0';
	                    cnzzImg.height = '0';
	                    cnzzImg.style.display = 'none';
	                    document.body.appendChild(cnzzImg);
	                    // cnzzImg.style = 'display: none'
	                }
	            }
	        },
	        // 初始化
	        init: function init() {
	            var _this6 = this;
	
	            this.initAd(); // 初始化请求3w广告接口 sessionStorage.setItem('ad')
	            this.setChannel();
	            this.initNav();
	            this.initTip();
	            // 浏览详情后返回列表中新闻位置
	            // 是否是返回
	            if ((typeof performance === 'undefined' ? 'undefined' : _typeof(performance)) === 'object' && performance.navigation.type === 2) {
	                var manualData = sessionStorage.getItem(this.channel + 'manualData');
	                var autoData = sessionStorage.getItem(this.channel + 'autoData');
	                if ('' + manualData !== 'null' && '' + autoData !== 'null') {
	                    this.setManual(JSON.parse(manualData));
	                    this.setAuto(JSON.parse(autoData));
	                    // 根据cookie滚动到上次浏览新闻
	                    var startTime = +new Date();
	                    var watchFlag = setInterval(function () {
	                        if ($content.find('section').length > 20 || +new Date() - startTime > 3000) {
	                            clearInterval(watchFlag);
	                            window.scroll(0, Util.getCookie('bodyTop'));
	                        }
	                    }, 50);
	                } else {
	                    sessionStorage.clear();
	                    this.getManual().done(function (data, status, xhr) {
	                        _this6.postStatistical();
	                        _this6.setManual(data);
	                        _this6.getAuto().done(function (data) {
	                            _this6.setAuto(data);
	                        });
	                    });
	                }
	            } else {
	                sessionStorage.clear();
	                this.getManual().done(function (data, status, xhr) {
	                    _this6.postStatistical();
	                    _this6.setManual(data);
	                    _this6.getAuto().done(function (data) {
	                        _this6.setAuto(data);
	                    });
	                });
	            }
	            this.initRefreshScroll();
	            // this.initLink()
	            // 切换频道
	            window.onhashchange = function () {
	                try {
	                    _this6.manualAjax.abort();
	                    _this6.autoAjax.abort();
	                } catch (err) {}
	                Util.setCookie('bodyTop', 0);
	                window.scroll(0, 0);
	                $content[0].innerHTML = '';
	                sessionStorage.clear();
	                _this6.setChannel();
	                _this6.setNavPos();
	                _this6.getManual().done(function (data, status, xhr) {
	                    _this6.postStatistical();
	                    _this6.setManual(data);
	                    _this6.getAuto().done(function (data) {
	                        _this6.setAuto(data);
	                    });
	                });
	            };
	        }
	    };
	    App.init();
	
	    function randomStr(len) {
	        var sb = "";
	        var dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
	        for (var i = 0; i < len; ++i) {
	            sb += dict.charAt(Math.random() * dict.length | 0);
	        }return sb;
	    }
	
	    actions();
	    // 行为收集
	    function actions() {
	
	        // var body = document.getElementsByTagName('body')[0];
	        // var script = document.createElement('script');
	        // script.type = 'text/javascript';
	        // script.src = 'https://nbrecsys.4paradigm.com/resource/js/sdk-lib-hqw-smallflow.js';
	        // body.appendChild(script);
	
	        var requestID = randomStr(8);
	        var host = "https://nbrecsys.4paradigm.com";
	        var o;
	        var sceneID = 635;
	        var itemPfx = 360;
	        var clientToken = "b8298c76d204483d9501a583f047ea71";
	        var userID = (document.cookie.match(/userID=(.+?)\b/) || [])[1]; // possibly none
	
	        function mode0(container) {
	            function scroll() {
	                var objs = [];
	                for (var i, o = container.firstElementChild; o; o = o.nextElementSibling) {
	                    if ((i = o["refItem"]) && !i["seen"] && visible(o)) i["seen"] = !!objs.push(i);
	                }
	                if (objs.length) action("show", objs);
	            }
	            container.addEventListener("click", function (ev) {
	                var x = ev.target,
	                    v;
	                while (!(v = x["refItem"]) && (x = x.parentElement)) {}
	                $.get('/apps/huanqiu/tongji_reco.php?news=paradigm&userid=' + userID); // 渠道接口统计
	                v && action("detailPageShow", [v]); // TODO support context less report
	                v && ulu([v]);
	            });
	            var deb = setTimeout(scroll);
	            window.addEventListener("scroll", function () {
	                clearTimeout(deb);
	                deb = setTimeout(scroll, 180);
	            });
	        }
	        (function bootstrap(i) {
	            if (o = document.querySelector("div#interesting-news")) mode0(o);else if (i < 7) setTimeout(bootstrap, 180, i + 1); // FIXME args may be unsupported
	        })(0); //if(o=(location.pathname.match(/^\/r\/(.+)/)||[])[1])mode1(o);
	
	        function visible(a) {
	            // TODO is it feasible to calculate obscuration and subsequently remove occluded region?
	            var rect = a.getBoundingClientRect();
	            var x = (rect.left + rect.right) / 2,
	                y = (rect.top + rect.bottom) / 2;
	            return x > 0 && x < document.documentElement.clientWidth && y > 0 && y < document.documentElement.clientHeight;
	        }
	
	        function randomStr(len) {
	            var sb = "";
	            var dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
	            for (var i = 0; i < len; ++i) {
	                sb += dict.charAt(Math.random() * dict.length | 0);
	            }return sb;
	        }
	
	        function hrTime(x) {
	            var date = new Date(x * 1000),
	                it;
	            var MM = (it = date.getMonth() + 1) < 10 ? '0' + it : it;
	            var dd = (it = date.getDay()) < 10 ? '0' + it : it;
	            var HH = (it = date.getHours()) < 10 ? '0' + it : it;
	            var mm = (it = date.getMinutes()) < 10 ? '0' + it : it;
	            var ss = (it = date.getSeconds()) < 10 ? '0' + it : it;
	            return date.getFullYear() + '-' + MM + '-' + dd + ' ' + HH + ':' + mm + ':' + ss;
	        }
	
	        function action(action, items) {
	            var url = host + "/action/api/log?requestID=" + requestID + "&clientToken=" + clientToken,
	                now = Date.now(),
	                refs = [];
	            for (var i in items) {
	                refs.push({
	                    "requestID": requestID,
	                    "actionTime": now,
	                    "action": action,
	                    "sceneId": sceneID,
	                    "userId": userID,
	                    "itemId": items[i].item_id,
	                    "context": items[i].context,
	                    "itemSetId": "" + itemPfx
	                });
	                var xhr = new XMLHttpRequest();
	                xhr.open("POST", url); /*xhr.setRequestHeader("Content-Type","application/json");*/
	                xhr.send(JSON.stringify({ "date": hrTime(now / 1e3), "actions": refs }));
	            }
	        }
	        // 优路
	        function ulu(v) {
	            $.ajax({
	                type: 'GET',
	                url: '//tj.qipus.cn/rcmd/rec/falls/click?siteId=5011&recId=' + (v[0].id || v[0].item_id) + '&parameter=' + v[0].parameter + '&cki=' + userID,
	                dataType: 'jsonp'
	            });
	        }
	    }
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	// 依赖 div#config.id > ul.mLunbo-wrapper > li.mLunbo-page
	var Event = __webpack_require__(2);
	var TouchMove = Event.TouchMove;
	
	var Lunbo = function Lunbo(config) {
	  // 默认配置
	  var defaultConfig = {
	    auto: true,
	    // loop: true,
	    // speed: 1,
	    // delay: 3,
	    speed: 0.5,
	    hasDot: true,
	    dotId: ''
	    // 合并配置
	  };config = _extends({}, defaultConfig, config);
	
	  // 用到的配置项
	  this.container = document.getElementById(config.id);
	  // this.auto = config.auto
	  // this.loop = config.loop
	  this.speed = config.speed;
	  this.delay = config.delay;
	  this.hasDot = config.hasDot;
	
	  // 一些使用到的变量
	  // DOM相关
	  this.listContainer = this.container.querySelector('.lunbo-wrapper');
	  this.len = this.container.querySelectorAll('.lunbo-page').length;
	  this.oneWidth = this.container.clientWidth;
	  // this.dotContainer = document.getElementById()
	
	  // 位置相关
	  this._n = 0;
	  this.startX = 0;
	  this.startTime = 0;
	  // this.movingFlag = null
	  // this.playingFlag = null
	};
	
	Lunbo.prototype.initStyle = function () {
	  this.listContainer.style.width = this.len * this.oneWidth + 'px';
	};
	
	Lunbo.prototype.createDots = function (parentElem) {
	  // 使用createElement创建的Dom节点,可以避免修改DOM对事件的影响
	  this.dotContainer = document.createElement('div');
	  this.dotContainer.setAttribute('class', 'focus-dots-content');
	  var str = '<a href="javascript:void(0);" class="dot active"></a>';
	  for (var i = 1; i < this.len; i++) {
	    str += '<a href="javascript:void(0);" class="dot"></a>';
	  }
	  this.dotContainer.innerHTML = str;
	  parentElem.appendChild(this.dotContainer);
	};
	
	// 将第一页复制到最后
	// Lunbo.prototype.createLoop = function () {
	//   let firstPage = this.container.querySelector('.lunbo-page')
	//   this.listContainer.appendChild(firstPage.clone(true))
	// }
	
	// Lunbo.prototype.autoPlay = function () {
	//   if (this.playingFlag === null) {
	//     this.playingFlag = setInterval(
	//       () => {
	//         this.setIndex(1)
	//         this.play()
	//       }, this.delay * 1000)
	//   }
	//   return this.playingFlag
	// }
	
	// Lunbo.prototype.pause = function () {
	//   clearInterval(this.playingFlag)
	//   this.playingFlag = null
	// }
	
	// 设置this._n
	Lunbo.prototype.setIndex = function (n) {
	  // 目的位置
	  var pos = this._n + n;
	  if (pos < 0) {
	    pos = pos + this.len;
	  } else if (pos >= this.len) {
	    pos = pos - this.len;
	  }
	  this._n = pos;
	};
	
	// 根据当前this._n滚动轮播
	Lunbo.prototype.play = function () {
	  this.setSlidePos(this.getSlidePos(), this.speed);
	  // 修改dot active
	  if (this.hasDot) {
	    this.dotNodes = this.dotContainer.querySelectorAll('.dot');
	    for (var i = 0; i < this.len; i++) {
	      this.dotNodes[i].className = 'dot';
	    }
	    this.dotNodes[this._n].className = 'dot active';
	  }
	};
	
	Lunbo.prototype.getSlidePos = function () {
	  return -this._n * this.oneWidth;
	};
	
	// 滑动到targetPos位置，延迟delayTime秒
	Lunbo.prototype.setSlidePos = function (targetPos, delayTime) {
	  if (typeof this.listContainer.style.webkitTransform === 'undefined') {
	    this.listContainer.style.marginLeft = targetPos + 'px';
	  } else {
	    this.listContainer.style.transform = 'translate3d(' + targetPos + 'px, 0, 0)';
	    this.listContainer.style.webkitTransform = 'translate3d(' + targetPos + 'px, 0, 0)';
	    this.listContainer.style.transitionDuration = delayTime + 's';
	    this.listContainer.style.webkitTransitionDuration = delayTime + 's';
	  }
	};
	
	// touchstart touchmove touchend事件
	Lunbo.prototype.touch = function () {
	  var _this = this;
	
	  var director = '';
	  // swipe start
	  this.container.addEventListener('touchstart', function (event) {
	    director = '';
	    TouchMove.getDirection.start(event);
	    _this.startX = event.touches[0].pageX;
	    _this.startTime = +new Date();
	  }, { passive: true });
	  // swiping
	  this.container.addEventListener('touchmove', function (event) {
	    director = director || TouchMove.getDirection.move(event);
	    if (director === 'right' || director === 'left') {
	      event.preventDefault();
	      event.stopPropagation();
	      var moved = event.touches[0].pageX - _this.startX;
	      if (_this._n === 0 && moved > 0) {
	        _this.setSlidePos(Math.pow(moved, 0.85), 0);
	      } else if (_this._n === _this.len - 1 && moved < 0) {
	        _this.setSlidePos(-Math.pow(-moved, 0.85) + _this.getSlidePos(), 0);
	      } else {
	        _this.setSlidePos(event.touches[0].pageX - _this.startX + _this.getSlidePos(), 0);
	      }
	    }
	  });
	  // swipe end
	  this.container.addEventListener('touchend', function (event) {
	    if (director === 'right' || director === 'left') {
	      var diffTime = +new Date() - _this.startTime;
	      var diffX = _this.startX - event.changedTouches[0].pageX;
	      if (diffX > _this.oneWidth / 5 || diffX > _this.oneWidth / 7 && diffX / diffTime > 0.2) {
	        if (_this._n !== _this.len - 1) {
	          _this.setIndex(1);
	        }
	      } else if (-diffX > _this.oneWidth / 5 || -diffX > _this.oneWidth / 7 && -diffX / diffTime > 0.2) {
	        if (_this._n !== 0) {
	          _this.setIndex(-1);
	        }
	      }
	      _this.play();
	    }
	    director = TouchMove.getDirection.end();
	  }, { passive: true });
	};
	
	Lunbo.prototype.init = function () {
	  this.initStyle();
	  this.touch();
	  this.hasDot && this.createDots(this.container);
	  this.auto && this.autoPlay();
	};
	
	module.exports = Lunbo;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	var Event = {
	  TouchMove: {
	    getDirection: {
	      startPos: {},
	      movedPos: {},
	      start: function start(event) {
	        this.startPos.x = event.touches[0].clientX;
	        this.startPos.y = event.touches[0].clientY;
	      },
	      move: function move(event) {
	        this.movedPos.x = event.changedTouches[0].clientX - this.startPos.x;
	        this.movedPos.y = event.changedTouches[0].clientY - this.startPos.y;
	        if (Math.abs(this.movedPos.x) > Math.abs(this.movedPos.y)) {
	          if (this.movedPos.x > 0) return 'right';
	          if (this.movedPos.x < 0) return 'left';
	        } else if (Math.abs(this.movedPos.x) < Math.abs(this.movedPos.y)) {
	          if (this.movedPos.y > 0) return 'bottom';
	          if (this.movedPos.y < 0) return 'top';
	        }
	      },
	      end: function end() {
	        this.startPos = {};
	        return undefined;
	      }
	    }
	  }
	};
	
	module.exports = Event;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var Event = __webpack_require__(2);
	var GetDirection = Event.TouchMove.getDirection;
	
	var RefreshControl = function RefreshControl(config) {
	  // 默认配置
	  var defaultConifg = {
	    height: 50,
	    hookFunc: function hookFunc() {}
	    // 合并配置
	  };config = _extends({}, defaultConifg, config);
	  // 配置项
	  this.controlElem = document.getElementById(config.id);
	  this.containerElem = document.getElementById(config.containerId);
	  this.height = config.height;
	  this.hookFunc = config.hookFunc;
	  this.touchStartHook = config.touchStartHook;
	  this.touchMovingHook = config.touchMovingHook;
	  this.touchEndHook = config.touchEndHook;
	  // 全局变量
	  this.startX = 0;
	  this.startY = 0;
	  this.refreshControlFlag = false;
	  this.direction = '';
	  // Icon定制，非公用
	  this.refreshIcon = document.getElementById('transform-icon');
	};
	
	RefreshControl.prototype.touchStart = function (event) {
	  if (window.scrollY <= 5) {
	    this.refreshControlFlag = true;
	  } else {
	    return;
	  }
	  GetDirection.start(event);
	  this.controlElem.style.transition = 'none';
	  this.controlElem.style.webkitTransition = 'none';
	  this.startX = event.touches[0].clientX;
	  this.startY = event.touches[0].clientY;
	};
	
	RefreshControl.prototype.touchMoving = function (event) {
	  if (!this.refreshControlFlag) {
	    return;
	  }
	  this.direction = this.direction || GetDirection.move(event);
	  if (this.direction !== 'bottom') {
	    this.refreshControlFlag = false;
	    return;
	  }
	  var movingY = event.touches[0].clientY;
	  // if (movingY > this.startY) {
	  event.preventDefault();
	  event.stopPropagation();
	  var movedY = movingY - this.startY;
	  this.controlElem.style.transform = 'translate3d(0, ' + movedY / 2 + 'px, 0)';
	  this.controlElem.style.webkitTransform = 'translate3d(0, ' + movedY / 2 + 'px, 0)';
	  // Icon定制
	  this.refreshIcon.style.strokeDashoffset = movedY * 25.5;
	  if (movedY / 2 > this.height) {
	    document.getElementById('refresh-text').innerHTML = '松开刷新';
	  } else {
	    document.getElementById('refresh-text').innerHTML = '下拉刷新';
	  }
	  // }
	};
	
	RefreshControl.prototype.touchEnd = function (event) {
	  this.direction = '';
	  GetDirection.end();
	  if (!this.refreshControlFlag) {
	    return;
	  }
	  this.refreshControlFlag = false;
	  if ((event.changedTouches[0].clientY - this.startY) / 2 > this.height) {
	    this.controlElem.style.transform = 'translate3d(0, ' + this.height + 'px, 0)';
	    this.controlElem.style.webkitTransform = 'translate3d(0, ' + this.height + 'px, 0)';
	    this.hookFunc();
	    document.getElementById('refresh-text').innerHTML = '刷新中...';
	    this.refreshIcon.style.transition = 'all 10s linear .1s';
	    this.refreshIcon.style.webkitTransition = 'all 10s linear .1s';
	    this.refreshIcon.style.strokeDashoffset = 40000;
	  } else {
	    this.controlElem.style.transform = 'translate3d(0, 0, 0)';
	    this.controlElem.style.webkitTransform = 'translate3d(0, 0, 0)';
	  }
	};
	
	RefreshControl.prototype.hidden = function () {
	  var _this = this;
	
	  this.controlElem.style.transition = 'all 0.2s ease-in 0.1s';
	  this.controlElem.style.webkitTransition = 'all 0.2s ease-in 0.1s';
	  this.controlElem.style.transform = 'translate3d(0, 0, 0)';
	  this.controlElem.style.webkitTransform = 'translate3d(0, 0, 0)';
	  this.refreshIcon.style.transition = 'none';
	  this.refreshIcon.style.webkitTransition = 'none';
	  setTimeout(function () {
	    document.getElementById('refresh-text').innerHTML = '下拉刷新';
	    _this.refreshIcon.style.strokeDashoffset = 0;
	  }, 300);
	};
	
	RefreshControl.prototype.init = function () {
	  this.controlElem.addEventListener('touchstart', this.touchStart.bind(this));
	  this.controlElem.addEventListener('touchmove', this.touchMoving.bind(this));
	  this.controlElem.addEventListener('touchend', this.touchEnd.bind(this));
	};
	
	module.exports = RefreshControl;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var Event = __webpack_require__(5);
	
	var RefreshScroll = function RefreshScroll(config) {
	  // 默认配置
	  var defaultConfig = {
	    getData: function getData() {}
	    // 合并配置
	  };config = _extends({}, defaultConfig, config);
	
	  // 全局变量
	  this.getData = config.getData;
	  this.screenHeight = screen.height;
	  this.bodyHeight = document.body.clientHeight;
	};
	
	RefreshScroll.prototype.watch = function () {
	  this.bodyHeight = document.body.clientHeight;
	  if (window.scrollY > this.bodyHeight - this.screenHeight * 1.2) {
	    this.getData();
	    this.bodyHeight = document.body.clientHeight;
	  }
	};
	
	RefreshScroll.prototype.init = function () {
	  Event.addEvent(window, 'scroll', this.watch.bind(this));
	};
	
	module.exports = RefreshScroll;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	var Event = {
	  addEvent: function addEvent(domElem, event, func) {
	    if (document.addEventListener) {
	      return domElem.addEventListener(event, func);
	    } else if (document.attachEvent) {
	      return domElem.attachEvent(event, func);
	    }
	    domElem['on' + event] = func;
	  },
	  isMoveHorizontal: function isMoveHorizontal(startX, startY, currX, currY) {
	    if (Math.abs(currX - startX) > Math.abs(currY - startY)) {
	      return true;
	    }
	    return false;
	  },
	  isMoveVertical: function isMoveVertical(startX, startY, currX, currY) {
	    if (Math.abs(currX - startX) < Math.abs(currY - startY)) {
	      return true;
	    }
	    return false;
	  },
	  TouchMove: {
	    getDirection: {
	      startPos: {},
	      movedPos: {},
	      start: function start(event) {
	        this.startPos.x = event.touches[0].clientX;
	        this.startPos.y = event.touches[0].clientY;
	      },
	      move: function move(event) {
	        this.movedPos.x = event.changedTouches[0].clientX - this.startPos.x;
	        this.movedPos.y = event.changedTouches[0].clientY - this.startPos.y;
	        if (Math.abs(this.movedPos.x) > Math.abs(this.movedPos.y)) {
	          if (this.movedPos.x > 0) return 'right';
	          if (this.movedPos.x < 0) return 'left';
	        } else if (Math.abs(this.movedPos.x) < Math.abs(this.movedPos.y)) {
	          if (this.movedPos.y > 0) return 'bottom';
	          if (this.movedPos.y < 0) return 'top';
	        }
	      },
	      end: function end() {
	        this.startPos = {};
	      }
	    }
	  }
	};
	
	module.exports = Event;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';
	
	var Util = {
	  // return 轮播图标题
	  generateTitle: function generateTitle(title) {
	    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
	
	    var count = 0;
	    if (!title || typeof title.length !== 'number') {
	      return title;
	    }
	    for (var i = 0, len = title.length; i < len; i++) {
	      // 是否是半角
	      count += /[\u0000-\u00FF]/.test(title[i]) ? 0.5 : 1;
	      if (count >= num) {
	        return title.substr(0, i) + '…';
	      }
	    }
	    return title;
	  },
	  // return 时间显示格式
	  generateTime: function generateTime(date) {
	    var currDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : +new Date();
	
	    if (typeof date === 'string') {
	      date = +new Date(date.replace(/-/g, '/'));
	    }
	    if (isNaN(date)) {
	      return '';
	    }
	    var diffDate = currDate - date;
	    // 一分钟内
	    if (diffDate <= 60000) {
	      return '刚刚';
	    } else if (diffDate <= 3600000) {
	      return ~~(diffDate / 60000) + '分钟前';
	    } else if (diffDate <= 86400000) {
	      return ~~(diffDate / 3600000) + '小时前';
	    } else if (diffDate <= 604800000) {
	      return ~~(diffDate / 86400000) + '天前';
	    }
	    return new Date(date).getMonth() + 1 + '月' + new Date(date).getDate() + '日';
	  },
	  // return search对象
	  getSearch: function getSearch() {
	    var searchObject = {};
	    var searchArr = location.search.substr(1).split('&');
	    searchArr.forEach(function (item, index) {
	      var _item$split = item.split('='),
	          name = _item$split[0],
	          value = _item$split[1];
	
	      if (name.length) {
	        searchObject[name] = value;
	      }
	    });
	    return searchObject;
	  },
	  // 通过字符串
	  // return search对象
	  getSearchByString: function getSearchByString(urlStr) {
	    if (urlStr.indexOf('?') < 0) {
	      return {};
	    }
	    var searchObject = {};
	    var searchArr = urlStr.split('?')[1].split('&');
	    searchArr.forEach(function (item, index) {
	      var _item$split2 = item.split('='),
	          name = _item$split2[0],
	          value = _item$split2[1];
	
	      if (name.length) {
	        searchObject[name] = value;
	      }
	    });
	    return searchObject;
	  },
	  // return hash对象
	  getHash: function getHash() {
	    var hashObject = {};
	    var hashArr = location.hash.substr(1).split('&');
	    hashArr.forEach(function (item, index) {
	      var _item$split3 = item.split('='),
	          name = _item$split3[0],
	          value = _item$split3[1];
	
	      if (name.length) {
	        hashObject[name] = value;
	      }
	    });
	    return hashObject;
	  },
	  // return UUID
	  getId: function getId() {
	    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36;
	
	    var str = '';
	    var base = '0123456789abcdef';
	    for (var i = 0; i < len; i++) {
	      str += base[~~(Math.random() * 16)];
	    }
	    return str;
	  },
	  // 设置cookie
	  setCookie: function setCookie(key, value, expiredays) {
	    var exdate = new Date();
	    exdate.setDate(exdate.getDate() + expiredays);
	    document.cookie = key + '=' + escape(value) + (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
	  },
	  // 得到cookie
	  getCookie: function getCookie(key) {
	    if (document.cookie.length > 0) {
	      var cookieStart = document.cookie.indexOf(key + '=');
	      if (cookieStart !== -1) {
	        cookieStart = cookieStart + key.length + 1;
	        var cookieEnd = document.cookie.indexOf(';', cookieStart);
	        if (cookieEnd === -1) {
	          cookieEnd = document.cookie.length;
	        }
	        return unescape(document.cookie.substring(cookieStart, cookieEnd));
	      }
	    }
	    return '';
	  },
	  // 懒加载图片 依赖zepto
	  setImgUrl: function setImgUrl($elem) {
	    var $imgElems = $elem.find('img');
	    $.each($imgElems, function (index, item) {
	      var $item = $(item);
	      if ($item.attr('data-imgUrl') !== undefined && $item.attr('src') !== $item.attr('data-imgUrl')) {
	        $item.attr('src', $item.attr('data-imgUrl'));
	        $item.removeAttr('data-imgUrl');
	      }
	    });
	  }
	};
	
	module.exports = Util;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	// HTML生成器
	var Util = __webpack_require__(6);
	
	var Generate = {
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
	  lunboHtml: function lunboHtml(id, data) {
	    var str = '<div class="lunbo" id="' + id + '"><ul class="lunbo-wrapper">';
	    for (var item in data) {
	      data[item].title = Util.generateTitle(data[item].title, 16);
	      str += '\n        <li class="lunbo-page">\n          <a href="' + data[item].url + '">\n            <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/lunbo_image.png\';" src="' + data[item].pic + '" alt="">\n            <div class="lunbo-title-bg">\n              <p class="lunbo-title">' + data[item].title + '</p>\n            </div>\n          </a>\n        </li>\n      ';
	    }
	    str += '</ul></div>';
	    return str;
	  },
	  // return 首页标题头
	  headerHtml: function headerHtml(title) {
	    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	    var str = '\n      <div class="block-header">\n        <span class="block-logo">' + title + '</span>\n        ' + children + '\n      </div>\n    ';
	    return str;
	  },
	  // return 今日要闻轮播指示器
	  listIndicator: function listIndicator(len, id) {
	    if (len <= 1) {
	      return '';
	    }
	    var str = '\n      <div class="list-indicator">\n        <span class="list-indicator-curr" id="' + id + '">1</span>\n        <span class="list-lens">/' + len + '</span>\n      </div>\n    ';
	    return str;
	  },
	  // return 单个新闻HTML字符串
	  newsHtml: function newsHtml(data) {
	    var imgDisable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    var str = '';
	    var title = Util.generateTitle(data.title, 28);
	    var date = Util.generateTime(data.date);
	    if (typeof data.pic === 'undefined' && data.mediaType !== 'advert') {
	      return '';
	    }
	    var recommendUl = !Util.getHash().channel && data.id ? 'recommend=ul' : '';
	    if (data.url) recommendUl = data.url.indexOf('?') >= 0 ? '&' + recommendUl : '?' + recommendUl;
	
	    if (data.mediaType === 'text') {
	      str += '\n        <section class="news-style-0">\n          <a href="' + data.url + recommendUl + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n            <div class="news-content">\n              <div class="news-title">' + title + '</div>\n              <div class="news-info">\n                <span class="news-from">' + data.source + '</span>\n                <span class="news-date">' + date + '</span>\n              </div>\n            </div>\n          </a>\n        </section>\n      ';
	    } else if (data.mediaType === 'oneImg') {
	      if (data.contentType === 'content_text') {
	        // 单图
	        str += '\n          <section class="news-style-1">\n            <a href="' + data.url + recommendUl + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n              <div class="news-content">\n                <div class="news-title">' + title + '</div>\n                <div class="news-info">\n                  <span class="news-from">' + data.source + '</span>\n                  <span class="news-date">' + date + '</span>\n                </div>\n              </div>\n              <div class="news-imgs">\n                  <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/one_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + data.pic[0] : 'src="' + data.pic[0]) + '" alt="">\n              </div>\n            </a>\n          </section>\n        ';
	      } else if (data.contentType === 'content_video') {
	        str += '\n          <section class="news-video">\n            <a href="' + data.url + recommendUl + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n              <p class="news-title">' + title + '</p>\n              <div class="video-img">\n                <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png\';" src="' + data.pic[0] + '" alt="">\n                <div class="video-btn">\n                  <svg>\n                    <use xlink:href="#video-icon" />\n                  </svg>\n                </div>\n              </div>\n              <div class="news-info">\n                <span class="news-from">' + data.source + '</span>\n                <span class="news-date">' + date + '</span>\n              </div>\n            </a>\n          </section>\n          ';
	      } else if (data.contentType === 'content_picture') {
	        str += '\n          <section class="news-video">\n            <a href="' + data.url + recommendUl + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n              <p class="news-title">' + title + '</p>\n              <div class="video-img">\n                <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png\';" src="' + data.pic[0] + '" alt="">\n              </div>\n              <div class="news-info">\n                <span class="news-from">' + data.source + '</span>\n                <span class="news-date">' + date + '</span>\n              </div>\n            </a>\n          </section>\n        ';
	      } else if (data.contentType === 'shijiuda') {
	        // 两会专题 临时
	        str += '\n          <section class="news-style-1">\n            <a href="' + data.url + recommendUl + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n              <div class="news-content">\n                <div class="news-title">' + title + '</div>\n                <div class="news-info">\n\n                  <span class="news-date">' + date + '</span>\n                  <span class="news-special">\u4E24\u4F1A\u4E13\u9898</span>\n                </div>\n              </div>\n              <div class="news-imgs">\n                  <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/one_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + data.pic[0] : 'src="' + data.pic[0]) + '" alt="">\n              </div>\n            </a>\n          </section>\n        ';
	      }
	    } else if (data.mediaType === 'moreImg') {
	      // 多图
	      str += '\n        <section class="news-style-2">\n          <a href="' + data.url + recommendUl + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n            <p class="news-title">' + title + '</p>\n            <div class="news-imgs">\n              <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + data.pic[0] : 'src="' + data.pic[0]) + '" alt="">\n              <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + data.pic[1] : 'src="' + data.pic[1]) + '" alt="">\n              <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + data.pic[2] : 'src="' + data.pic[2]) + '" alt="">\n            </div>\n          </a>\n          <div class="news-info">\n            <span class="news-from">' + data.source + '</span>\n            <span class="news-date">' + date + '</span>\n          </div>\n        </section>\n      ';
	    } else if (data.mediaType === 'advert') {
	      // 广告
	      str += '\n        <div class="mock-line"></div>\n        <section>\n          ' + data.data + '\n        </section>\n      ';
	      // console.log(str)
	    }
	    return str;
	  },
	  paradigm4NewsHtml: function paradigm4NewsHtml(data) {
	    var imgDisable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    var str = '';
	    var title = Util.generateTitle(data.title, 28);
	    var date = Util.generateTime(data.date);
	    var pic = data.cover_url.split(',');
	
	    if (pic.length === 1 && pic[0] === '') {
	      str += '\n        <section class="news-style-0">\n          <a href="' + data.url + '" data-id="' + data.id + '" class="link-flag">\n            <div class="news-content">\n              <div class="news-title">' + title + '</div>\n              <div class="news-info">\n                <span class="news-from">' + data.publisher_id + '</span>\n              </div>\n            </div>\n          </a>\n        </section>\n      ';
	    } else if (pic.length >= 1) {
	
	      // 单图
	      str += '\n          <section class="news-style-1">\n            <a href="' + data.url + '" data-id="' + data.id + '" class="link-flag">\n              <div class="news-content">\n                <div class="news-title">' + title + '</div>\n                <div class="news-info">\n                  <span class="news-from">' + data.publisher_id + '</span>\n                </div>\n              </div>\n              <div class="news-imgs">\n                  <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/one_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + pic[0] : 'src="' + pic[0]) + '" alt="">\n              </div>\n            </a>\n          </section>\n        ';
	    } else if (pic.length >= 2) {
	      // 多图
	      str += '\n        <section class="news-style-2">\n          <a href="' + data.url + '" data-id="' + data.id + '" class="link-flag">\n            <p class="news-title">' + title + '</p>\n            <div class="news-imgs">\n              <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + pic[0] : 'src="' + pic[0]) + '" alt="">\n              <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + pic[1] : 'src="' + pic[1]) + '" alt="">\n              <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/more_image.png\';" class="news-pic" ' + (imgDisable ? 'src="" data-imgUrl="' + pic[2] : 'src="' + pic[2]) + '" alt="">\n            </div>\n          </a>\n          <div class="news-info">\n            <span class="news-from">' + data.publisher_id + '</span>\n            <span class="news-date">' + date + '</span>\n          </div>\n        </section>\n      ';
	    } else if (data.mediaType === 'advert') {
	      // 广告
	      str += '\n        <div class="mock-line"></div>\n        <section>\n          ' + data.data + '\n        </section>\n      ';
	      // console.log(str)
	    }
	    return str;
	  },
	  // return 新闻列表
	  newsBlock: function newsBlock() {
	    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	    var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
	    var str = '\n      <div class="news-block" id="' + id + '">\n        ' + children + '\n      </div>\n    ';
	    return str;
	  },
	  // return 首页新闻列表HTML字符串
	  homeNewsHtml: function homeNewsHtml(data) {
	    var str = '<div class="block-content" id="recommend-content"><ul class="lunbo-wrapper"><li class="lunbo-page">';
	    for (var item in data) {
	      if (item % 14 === 0 && +item !== 0) {
	        str += '</li><li class="lunbo-page">';
	      }
	      str += Generate.newsHtml(data[item], !!(item > 14));
	    }
	    str += '</li></ul></div>';
	    return str;
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
	  picChannelHtml: function picChannelHtml(data) {
	    var str = '\n      <section class="pic-block">\n        <a href="' + data.url + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n          <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png\';" src="' + data.pic[0] + '"" alt="" />\n          <p class="pic-title">' + data.title + '</p>\n        </a>\n      </section>\n    ';
	    return str;
	  },
	  // return 图片频道（兴趣推荐）
	  picChannelHtml2: function picChannelHtml2(data) {
	    var str = '\n      <section class="pic-block">\n        <a href="' + data.url + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n          <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png\';" src="' + data.pic[0] + '"" alt="" />\n          <p class="pic-title">' + data.title + '</p>\n        </a>\n      </section>\n    ';
	    return str;
	  },
	  // return 视频频道
	  videoChannelHtml: function videoChannelHtml(data) {
	    var str = '\n      <section class="pic-block">\n        <a href="' + data.url + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n          <div class="video-img">\n            <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png\';" src="' + data.pic[0] + '" alt="">\n            <div class="video-btn">\n              <svg>\n                <use xlink:href="#video-icon" />\n              </svg>\n            </div>\n          </div>\n          <p class="pic-title">' + data.title + '</p>\n        </a>\n      </section>\n    ';
	    return str;
	  },
	  // return 视频频道（兴趣推荐）
	  videoChannelHtml2: function videoChannelHtml2(data) {
	    var str = '\n      <section class="pic-block">\n        <a href="' + data.url + '" data-id="' + data.id + '" data-parameter="' + data.parameter + '" class="link-flag">\n          <div class="video-img">\n            <img onError="this.onerror=null;this.src=\'//himg2.huanqiu.com/statics/www/hq_m/dist/m_huanqiu/images/video_image.png\';" src="' + data.pic[0] + '" alt="">\n            <div class="video-btn">\n              <svg>\n                <use xlink:href="#video-icon" />\n              </svg>\n            </div>\n          </div>\n          <p class="pic-title">' + data.title + '</p>\n        </a>\n      </section>\n    ';
	    return str;
	  },
	  // return 微信热点
	  wechatHtml: function wechatHtml(data) {
	    var str = Generate.headerHtml('微信热点');
	    str += '<div class="wechat-content">';
	    for (var i = 0; i < 5; i++) {
	      str += '\n        <div class="wechat-block">\n          <a href="' + data[i].url + '">\n            <p class="wechat-title">\n              ' + data[i].title + '\n            </p>\n            <p class="wechat-small">\n              ' + data[i].tag + '\n            </p>\n          </a>\n        </div>\n      ';
	    }
	    return str;
	  }
	};
	
	module.exports = Generate;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	var Insert = {
	  insertLunboAd: function insertLunboAd($elem, index, data) {
	    var str = '<li class="lunbo-page">' + data + '</li>';
	    $elem.find('li').eq(index).before(str);
	  },
	  insertWechat: function insertWechat($elem, index, data) {
	    $elem.find('section').eq(index).before(data);
	  }
	};
	
	module.exports = Insert;

/***/ })
/******/ ]);


// WEBPACK FOOTER //
// index.js