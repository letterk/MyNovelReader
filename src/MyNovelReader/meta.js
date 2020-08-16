// ==UserScript==
// @id             mynovelreader@ywzhaiqi@gmail.com
// @name           My Novel Reader
// @name:zh-CN     小说阅读脚本
// @name:zh-TW     小說閱讀腳本
// @version        6.4.1
// @namespace      https://github.com/ywzhaiqi
// @author         ywzhaiqi
// @contributor    Roger Au, shyangs, JixunMoe、akiba9527 及其他网友
// @description    小说阅读脚本，统一阅读样式，内容去广告、修正拼音字、段落整理，自动下一页
// @description:zh-CN  小说阅读脚本，统一阅读样式，内容去广告、修正拼音字、段落整理，自动下一页
// @description:zh-TW  小說閱讀腳本，統一閱讀樣式，內容去廣告、修正拼音字、段落整理，自動下一頁
// @license        GPL version 3
// @grant          GM_xmlhttpRequest
// @grant          GM_addStyle
// @grant          GM_getValue
// @grant          GM_setValue
// @grant          GM_getResourceURL
// @grant          GM_openInTab
// @grant          GM_setClipboard
// @grant          GM_registerMenuCommand
// @grant          GM_info
// @grant          unsafeWindow
// @homepageURL    https://greasyfork.org/scripts/292/
// @require        https://cdn.staticfile.org/vue/2.2.6/vue.min.js
// @require        https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js
// @require        https://cdn.staticfile.org/underscore.js/1.7.0/underscore-min.js
// @require        https://cdn.staticfile.org/keymaster/1.6.1/keymaster.min.js
// @require        https://greasyfork.org/scripts/2672-meihua-cn2tw/code/Meihua_cn2tw.js?version=7375

// @connect        *
// @connect        *://*.qidian.com/

// @include        *://read.qidian.com/*,*.aspx
// @include        *://readbook.qidian.com/bookreader/*,*.html
// @include        *://read.qidian.com/BookReaderOld/*,*.aspx
// @include        *://read.qidian.com/BookReader/*,*.aspx
// @exclude        http://read.qidian.com/BookReader/vol,*,*.aspx
// @include        *://wwwploy.qidian.com/BookReader/*,*.aspx
// @include        *://free.qidian.com/Free/ReadChapter.aspx?*
// @include        *://vipreader.qidian.com/chapter/*/*
// @include        *://www.qdmm.com/BookReader/*,*.aspx
// @include        *://www.qdwenxue.com/BookReader/*,*.aspx
// @include        *://chuangshi.qq.com/read/bookreader/*.html*
// @include        *://chuangshi.qq.com/*bk/*/*-r-*.html*
// @include        *://yunqi.qq.com/*bk/*/*.html
// @include        *://dushu.qq.com/read.html?bid=*
// @include        *://www.jjwxc.net/onebook.php?novelid=*
// @include        *://my.jjwxc.net/onebook_vip.php?novelid=*&chapterid=*
// @include        *://book.zongheng.com/chapter/*/*.html
// @include        *://www.xxsy.net/chapter/*.html
// @include        *://book.zhulang.com/*/*.html
// @include        *://www.17k.com/chapter/*/*.html
// @include        *://mm.17k.com/chapter/*/*.html
// @include        *://www.kanxia.net/k/*/*/*.html
// @include        *://www.qingdi.com/files/article/html/*/*/*.html
// @include        *://www.xkzw.org/*/*.html
// @include        *://shouda8.com/*/*.html
// @include        *://novel.hongxiu.com/*/*/*.shtml
// @include        *://www.readnovel.com/novel/*.html
// http://www.tianyabook.com/*/*.htm

// @include        *://tieba.baidu.com/p/*
// @include        *://booklink.me/*
// @include        *://2.booklink.me/*

// booklink.me
// @include        *://www.shumil.co/*/*.html
// @include        *://www.wcxiaoshuo.com/wcxs-*-*/
// @include        *://www.xiaoshuoz.com/wcxs-*-*/
// @include        *://www.quledu.com/wcxs-*-*/
// @include        *://www.ranwen.cc/*/*/*/*.html
// @include        *://www.ranwen.net/files/article/*/*/*.html
// @include        *://www.ranwena.com/files/article/*/*/*.html
// @include        *://www.64mi.com/*/*/*/*.html
// @include        *://www.bxs.cc/*/*.html*
// @include        *://www.laishuwu.com/html/*/*/*.html
// @include        *://www.binhuo.com/html/*/*/*.html
// @include        *://www.haoqi99.com/haoqi99/*/*/*.shtml
// @include        *://www.shuhe.cc/*/*/
// @include        *://www.dudukan.net/html/*/*/*.html
// @include        *://www.hahawx.com/*/*/*.htm
// @include        *://www.zhuzhudao.com/txt/*/*/
// @include        *://www.zhuzhudao.cc/txt/*/*/
// @include        *://www.dahaomen.net/txt/*/*/
// @include        *://www.tadu.com/book/*/*/
// @exclude        *://www.tadu.com/book/*/toc/
// @include        *://www.aishoucang.com/*/*.html
// @include        *://www.wanshuba.com/Html/*/*/*.html
// @include        *://www.zhuishu.net/files/article/html/*/*/*.html
// @include        *://www.sqsxs.com/*/*/*.html*
// @include        *://www.caiwei.tw/html/*/*.html
// @include        *://www.hotsk.com/Html/Book/*/*/*.shtml
// @include        *://www.92to.com/*/*/*.html
// @include        *://www.qirexs.com/read-*-chapter-*.html
// @include        *://www.du00.com/read/*/*/*.html
// @include        *://www.qishuwu.com/*/*/
// @include        *://www.wandoou.com/book/*/*.html
// @include        *://www.6yzw.org/*/*.html
// @include        *://www.6yzw.com/*/*.html
// @include        *://www.daomengren.com/*/*.html
// @include        *://muyuge.com/*/*.html
// @include        *://www.muyuge.net/*/*.html
// @include        *://bbs.vyming.com/novel-read-*-*.html
// @include        *://www.9imw.com/novel-read-*-*.html
// @include        *://www.23zw.com/olread/*/*/*.html
// @include        *://www.50zw.com/book_*/*.html
// @include        *://www.xiangcunxiaoshuo.com/shu/*/*.html
// @include        *://www.lwxs520.com/books/*/*/*.html
// @include        *://m.lwxs520.com/books/*/*/*.html
// @include        *://www.lwxiaoshuo.com/*/*/*.html
// @include        *://www.zashu.net/books/*/*/*.html
// @include        *://www.yunlaige.com/html/*/*/*.html
// @include        *://www.cfwx.net/files/article/html/*/*/*.html
// @include        *://www.qiuwu.net/html/*/*/*.html
// @include        *://www.fengwu.org/html/*/*/*.html
// @include        *://www.wenxue8.org/html/*/*/*.html

// @include        *://www.xs84.com/*_*/*
// @include        *://www.geiliwx.com/GeiLi/*/*/*.shtml*
// @include        *://www.123yq.com/read/*/*/*.shtml
// @include        *://www.123yq.org/read/*/*/*.shtml
// @include        *://www.dhzw.com/book/*/*/*.html
//         *://www.du00.cc/read/*/*/*.html
// @include        *://www.aszw.com/book/*/*/*.html
// @include        *://www.xsbashi.com/*_*/
// @include        *://www.vodtw.com/Html/Book/*/*/*.html
// @include        *://www.fhxs.com/read/*/*/*.shtml
// @include        *://www.snwx.com/book/*/*/*.html

// www.sodu.so
// @include        *://www.jiaodu8.com/*/*/*/*.html
// @include        *://www.fktxt.com/book/*/*.html
// @include        *://www.186s.cn/files/article/html/*/*/*.html
// @include        *://www.6xs.cn/xs/*/*/*.html
// @include        *://www.chaojiqiangbing.com/book/*/*/*.html
// @include        *://book.moka123.com/book/*/*/*.html
// @include        *://www.suimeng.com/files/article/html/*/*/*.html
// @include        *://www.hao662.com/haoshu/*/*/*.html

//www.verydu.net
//         http://www.yawen8.com/*/*/*.html
// @include        *://www.tsxs.cc/files/article/html/*/*/*.html
// @include        *://www.ziyuge.com/*/*/*/*/*.html

// 其它网站
// @include        *://book.sfacg.com/Novel/*/*/*/
// @include        *://www.7dsw.com/book/*/*/*.html
// @include        *://www.d586.com/*/*/
// @include        *://www.bookgew.com/Html/Book/*/*/*.htm
// @include        *://read.shuhaha.com/Html/Book/*/*/*.html
// @include        *://www.shuhaha.com/Html/Book/*/*/*.html
// @include        *://www.biqi.me/files/article/html/*/*/*.html
// @include        *://www.ttzw.com/book/*/*.html
// @include        *://www.uukanshu.com/*/*/*.html
// @include        *://www.uukanshu.net/*/*/*.html
// @include        *://www.173ed.com/read/*/*.html
// @include        *://www.a240.com/read/*/*.html
// @include        *://www.zhuishu.com/*/*.html
// @include        *://www.shuangde.cc/*/*.html
// @include        *://www.shenmaxiaoshuo.com/ml-*-*/
// @include        *://www.86kankan.com/read/*/*.html
// @include        *://www.fkzww.com/*/*/*.shtml
// @include        *://www.151kan.com/*/*/*/*.html
// @include        *://www.bookabc.net/*/*/*.html
// @include        *://www.xshuotxt.com/*/*/*/*.html
// @include        *://www.doulaidu.com/*/*/*.html
// @include        *://www.d586.com/*/*/
// @include        *://www.kanshu.la/book/*/*html
// @include        *://www.wtcxs.com/files/article/html/*/*/*.html
// @include        *://www.5du5.com/book/*/*/*.html
// @include        *://book.kanunu.org/*/*/*.html
// @include        *://www.kanunu8.com/book*/*.html
// @include        *://paitxt.com/*/*/*.html
// @include        *://www.shunong.com/yuedu/*/*/*.html
// @include        *://book.yayacms.com/*/book_*_*.html
// @include        *://www.yqhhy.cc/*/*/*.html
// @include        *://www.nuoqiu.com/static/*/*.html
// @include        *://www.17yue.com/*/*/*.html
// @include        *://dukeba.com/book/*/*/*.shtml
// @include        *://www.wenchangshuyuan.com/html/*/*/*.html
// @include        *://www.pofeng.net/xiaoshuo/*/*.html
// @include        *://www.epzww.com/book/*/*
// @include        *://*.xiaoshuokan.com/haokan/*/*.html
// @include        *://www.wobudu.com/*/*.html
// @include        *://www.qb5.com/xiaoshuo/*/*/*.html
// @include        *://www.x23us.com/html/*/*/*.html
// @include        *://www.23us.com/html/*/*/*.html
// @include        *://www.23us.cc/html/*/*/*.html
// @include        *://www.23wx.com/html/*/*/*.html
// @include        *://www.xs222.com/html/*/*/*.html
// @include        *://www.bixiage.com/*/*/*/*.html
// @include        *://www.ranwenxiaoshuo.com/files/article/html/*/*/*.html
// @include        *://www.ranwenxiaoshuo.com/*/*-*-*.html
// @include        *://www.bjxiaoshuo.com/bjxs-*-*/
// @include        *://www.59shuku.com/xiaoshuo/*/*.htm
// @include        *://www.16kbook.org/Html/Book/*/*/*.shtml
// @include        *://www.dixiaoshuo.com/Html/*/*.html
// @include        *://www.nieshu.com/Book/*/*/*.shtml
// @include        *://www.tlxsw.com/files/article/html/*/*/*.html
// @include        *://www.1kanshu.com/files/article/html/*/*/*.html
// @include        *://www.uutxt.org/book/*/*/*.html
// @include        *://www.5800.cc/*/*/*/*.html
// @include        *://www.biquge.com/*/*.html
// @include        *://www.biqudu.com/*/*.html
// @include        *://www.biquge.la/book/*/*.html
// @include        *://www.biquge.com.tw/*/*.html
// @include        *://www.biquge.tw/*_*/*.html
// @include        *://www.biquge.tv/*/*.html
// @include        *://www.biquge5200.com/*/*.html
// @include        *://www.biqugezw.com/*/*.html
// @include        *://www.bequgezw.com/*/*/*.html
// @include        *://www.biquzi.com/*_*/*.html
// @include        *://www.biquge.cc/html/*/*/*.html
// @include        *://www.biqubao.com/book/*/*.html
// @include        *://www.biquwu.cc/biquge/*/*.html
// @include        *://www.qududu.com/book/*/*/*.html
// @include        *://www.free97.cn/book/*/*/*.html
// @include        *://www.122s.com/book/*/*.html
// @include        *://www.123du.net/dudu-*/*/*.html
// @include        *://www.123du.cc/dudu-*/*/*.html
// @include        *://www.123du.net/book/*/*.html
// @include        *://www.hwafa.com/*/*.html
// @include        *://www.qmshu.com/html/*/*/*.html
// @include        *://dlzw.cc/article-*-*.html
// @include        *://www.shushu5.com/read/*/*.html
// @include        *://www.xiaoyanwenxue.com/files/article/html/*/*/*.html
// @include        *://www.3gsc.com.cn/bookcon/*_*_*
// @include        *://www.bj-ibook.cn/book/*/*/*.htm
// @include        *://www.baoliny.com/*/*.html
// @include        *://www.dajiadu.net/files/article/html/*/*/*.html
// @include        *://www.yankuai.com/files/article/html/*/*/*.html
// @include        *://www.docin.net/*/*.html
// @include        *://www.dushuge.net/html/*/*/*.html
// @include        *://www.xunshu.org/xunshu/*/*/*.html
// @include        *://www.moneyren.com/book/*/*/*.shtml
// @include        *://wemaxfilipino.com/*/*/*.html
// @include        *://www.85618892.cn/xiaoshuo/*/*/*.shtml
// @include        *://www.bookba.net/Html/Book/*/*/*.html
// @include        *://www.moksos.com/*/*/*.html
// @include        *://dudu8.net/novel/*/*/*.html
// @include        *://www.dawenxue.net/html/*/*/*.html
// @include        *://www.yanmoxuan.org/book/*/*/*.html
// @include        *://www.duyidu.com/xiaoshuo/*/*/*.html
// @include        *://www.69zw.com/xiaoshuo/*/*/*.html
// @include        *://www.kan7.com/xiaoshuo/*/*/*.html
// @include        *://www.laishu.com/book/*/*/*.shtml
// @include        *://www.bxwx.org/b/*/*/*.html
// @include        *://www.bxzw.org/*/*/*/*.shtml
// @include        *://www.360118.com/html/*/*/*.html
// @include        *://www.59to.com/files/article/xiaoshuo/*/*/*.html
// @include        *://www.dyzww.com/cn/*/*/*.html
// @include        *://www.9wh.net/*/*/*.html
// @include        *://www.luoqiu.net/html/*/*/*.html
// @include        *://www.luoqiu.com/html/*/*/*.html
// @include        *://www.epzw.com/files/article/html/*/*/*.html
// @include        *://www.dashubao.co/book/*/*/*.html
// @include        *://b.faloo.com/p/*/*.html
// @include        *://www.baikv.com/*/*.html
// @include        *://www.66721.com/*/*/*.html
// @include        *://www.3dllc.com/html/*/*/*.html
// @include        *://www.xstxt.com/*/*/
// @include        *://www.zzzcn.com/3z*/*/
// @include        *://www.zzzcn.com/modules/article/App.php*
// @include        *://www.nilongdao.com/book/*/*/*.html
// @include        *://xs321.net/*/*/
// @include        *://read.guanhuaju.com/files/article/html/*/*/*.html
// @include        *://www.book108.com/*/*/*.html
// @include        *://5ycn.com/*/*/*.html
// @include        *://www.zhaoxiaoshuo.com/chapter-*-*-*/
// @include        *://*zbzw.com/*/*.html
// @include        *://manghuangji.cc/*/*.html
// @include        *://www.aiqis.com/*/*.html
// @include        *://www.fftxt.net/book/*/*.html
// @include        *://www.5kwx.com/book/*/*/*.html
// @include        *://www.uuxiaoshuo.net/html/*/*/*.html
// @include        *://www.sanyyo.org/*.html
// @include        *://www.chinaisbn.com/*/*/*.html
// @include        *://www.caihongwenxue.com/Html/Book/*/*/*.html
// @include        *://www.shushuw.cn/shu/*/*.html
// @include        *://www.78xs.com/article/*/*/*.shtml
// @include        *://www.woaixiaoshuo.com/xiaoshuo/*/*/*.html
// @include        *://www.ty2016.com/book/*/*.html
// @include        *://wx.ty2016.com/*/*/*.html
// @include        *://www.my285.com/*/*/*/*.htm
// @include        *://www.5858xs.com/html/*/*/*.html
// @include        *://book.58xs.com/html/*/*/*.html
// @include        *://book.mihua.net/*/*/*/*.html
// @include        *://www.hjwzw.com/Book/Read/*,*
// @include        *://www.hjwzw.com/Book/Read/*_*
// @include        *://www.365essay.com/*/*.htm
// @include        *://www.gengxin8.com/read/*/*.html
// @include        *://www.365xs.org/books/*/*/*.html
// @include        *://www.wuruo.com/files/article/html/*/*/*.html
// @include        *://*.8shuw.net/book/*/*.html
// @include        *://www.pashuw.com/BookReader/*/*.html
// @include        *://read.shanwen.com/html/*/*/*.html
// @include        *://www.qqxs.cc/xs/*/*/*.html
// @include        *://www.69shu.com/txt/*/*
// @include        *://www.e8zw.com/book/*/*/*.html
// @include        *://www.8535.org/*/*/*.html*
// @include        *://www.yfzww.com/books/*/*/*.htm
// @include        *://www.lewen8.com/lw*/*.html
// @include        *://www.pinwenba.com/read/*/*.html
// @include        *://down1.qidian.com/bookall/*.htm*
// @include        *://www.77nt.com/*/*.html
// @include        *://www.quanbenba.com/yuedu/*/*/*.html
// @include        *://www.sto.cc/book-*-*.html
// @include        *://www.151xs.com/wuxiazuoxiong/*/chapter/*/
// @include        *://www.qududu.net/book/*/*/*.html
// @include        *://www.qingdou.cc/chapter*
// @include        *://www.shuyuewu.com/kan*
// @include        *://www.1553.net/*/*
// @include        *://www.269s.com/*/*/*
// @include        *://www.33yq.com/read/*/*/*.shtml
// @include        *://233yq.com/xiaoshuo/*.html
// @include        *://www.50zw.co/book_*/*.html
// @include        *://www.bqg5200.com/xiaoshuo/*/*/*.html
// @include        *://www.biquge5200.cc/*/*.html
// @include        *://www.50zw.la/book_*/*.html
// @include        *://www.qu.la/book/*/*.html
// @include        *://m.qu.la/book/*/*.html
// @include        *://www.luoqiu.com/read/*/*.html
// @include        *://www.54tushu.com/book_library/chaptershow/theId/*.html
// @include        *://www.snwx8.com/book/*/*/*.html
// @include        *://read.qidian.com/chapter/*
// @include        *://www.23zw.me/olread/*/*/*.html
// @include        *://www.ptwxz.com/html/*/*/*.html
// @include        *://www.dhzw.org/book/*/*/*.html
// @include        *://www.biqiuge.com/book/*/*.html
// @include        *://www.baquge.com/files/article/html/*/*/*.html
// @include        *://www.baquge.tw/files/article/html/*/*/*.html
// @include        *://www.bxwx9.org/b/*/*/*.html
// @include        *://www.miaobige.com/*/*/*.html
// @include        *://www.52dsm.com/chapter/*/*.html
// @include        *://www.banfusheng.com/chapter/*/*.html
// @include        *://www.remenxs.com/du_*/*/
// @include        *://www.shuhai.com/read/*/*.html
// @include        *://www.hbooker.com/chapter/*
// @include        *://www.mht.la/*/*/*.html
// @include        *://www.paomov.com/*/*/*.html
// @include        *://www.moyuanwenxue.com/xiaoshuo/*/*/*.htm
// @include        *://www.ggdown.com/modules/article/reader.php?aid=*
// @include        *://www.daizhuzai.com/*/*.html
// @include        *://www.mywenxue.com/xiaoshuo/*/*/*.htm
// @include        *://www.yueduyue.com/*/*.html
// @include        *://www.67shu.com/*/*/*.html
// @include        *://www.wangshu.la/books/*/*/*.html
// @include        *://www.23sw.net/*/*/*.html
// @include        *://www.ybdu.com/xiaoshuo/*/*/*.html
// @include        *://www.shudaizi.org/book/*/*.html
// @include        *://www.ymoxuan.com/book/*/*/*.html
// @include        *://www.67shu.com/*/*/*.html
// @include        *://www.bookxuan.com/*/*.html
// @include        *://www.2kxs.com/xiaoshuo/*/*.html
// @include        *://www.88dushu.com/xiaoshuo/*/*/*.html
// @include        *://www.wutuxs.com/html/*/*/*.html
// @include        *://www.23qb.com/book/*/*.html
// @include        *://www.biqu6.com/*/*.html
// @include        *://www.niepo.net/html/*/*/*.html
// @include        *://www.booktxt.net/*/*.html
// @include        *://www.booktxt.com/*/*.html
// @include        *://www.aszw.org/book/*/*/*.html
// @include        *://www.xiashu.cc/*/*.html
// @include        *://www.lewenxiaoshuo.com/books/*/*.html
// @include        *://www.heihei66.com/*/*/*.html
// @include        *://www.111bz.net/*/*.html
// @include        *://www.biqukan.com/*_*/*.html
// @include        *://www.4xiaoshuo.com/*/*/*.html
// @include        *://www.woquge.com/*/*.html
// @include        *://www.lianzaishu.com/*/*.html
// @include        *://www.lucifer-club.com/chapter-*-*.html
// @include        *://www.011bz.com/*/*.html
// @include        *://www.quanben.io/*/*/*.html
// @include        *://www.b5200.org/*/*.html
// @include        *://www.b5200.net/*/*.html
// @include        *://www.cangqionglongqi.com/*/*.html
// @include        *://www.daocaorenshuwu.com/book/*/*.html
// @include        https://xhhread.com/read/read*.jhtml?chapterid=*
// @include        *://www.shubao4.com/read/*/*.html
// @include        *://www.gxwztv.com/*/*/*.html
// @include        *://novel.tingroom.com/*/*/*.html
// @include        *://www.xxbiquge.com/*/*.html
// @include        *://www.liewen.cc/b/*/*/*.html
// @include        *://www.pbtxt.com/*/*.html
// @include        *://www.dingdiann.com/*/*.html
// @include        *://www.uctxt.com/book/*/*/*.html
// @include        *://www.mytxt.cc/read/*/*.html
// @include        *://yd.baidu.com/view/*?cn=*
// @include        *://www.88dus.com/xiaoshuo/*/*/*.html
// @include        *://m.yushuwu.com/novel/*/*.html
// @include        *://www.sbkk88.com/*/*/*.html
// @include        *://www.ciweimao.com/chapter/*
// @include        *://www.xinshubao.net/*/*/*.html
// @include        *://www.okdd.net/html/*/*/*.shtml
// @include        *://www.aixs.org/xs/*/*/*.html
// @include        *://www.kayege.com/book/*/*.html
// @include        *://m.zwduxs.com/*_*/*.html
// @include        *://www.23us.la/html/*/*/*.html
// @include        *://www.shuyaya.cc/read/*/*.html
// @include        *://www.58xs.tw/html/*/*/*.html
// @include        *://www.xbiquge.cc/book/*/*.html
// @include        *://www.pengchang-cn.com/*/*/*.html
// @include        *://www.555zw.com/book/*/*/*.html
// @include        *://www.69shu.la/69shu/*/*/*.html
// @include        *://www.biqux.com/*/*.html
// @include        *://houweidong.com/*.html
// @include        *://book.janpn.com/book/*/*/*.html
// @include        *://www.xs52.com/xiaoshuo/*/*/*.html
// @include        *://www.88106.com/book/*/*/*.html
// @include        *://www.luoxia.com/hch/*.htm
// @include        *://www.lianzaishu.com/*/*.html
// @include        *://www.juhezw.com/read/*/*.html
// @include        *://www.ranwen.la/files/article/*/*/*.html
// @include        *://www.zhaishuyuan.com/chapter/*/*
// @include        *://www.ciymao.com/chapter/*/*.html
// @include        *://www.3xs.cc/*/*.html
// @include        *://www.nuanyuehanxing.com/*/*/*.html
// @include        *://xrzww.com/module/novel/read.php*
// @include        *://www.wanbentxt.com/*/*.html
// @include        *://www.9txs.com/book/*/*.html
// @include        *://www.35xs.co/book/*/*.html
// include        *://www.gongzicp.com/read-*.html
// 未完成
// @include        *://www.alfagame.net/chapter_www.html?1*

// 移动版
// @include        *://wap.yc.ireader.com.cn/book/*/*/
// @include        *://m.jjwxc.net/book2/*/*
// @include        *://m.jjwxc.com/book2/*/*
// @include        *://wap.jjwxc.net/book2/*/*
// @include        *://wap.jjwxc.com/book2/*/*
// @include        *://wap.jjwxc.com/vip/*/*?ctime=*
// @include        *://wap.jjwxc.com/vip/*/*
// @include        *://wap.jjwxc.net/vip/*/*
// @include        *://m.jjwxc.net/vip/*/*
// @include        *://m.jjwxc.com/vip/*/*

// @exclude        */List.htm
// @exclude        */List.html
// @exclude        */List.shtml
// @exclude        */index.htm
// @exclude        */index.html
// @exclude        */index.shtml
// @exclude        */Default.htm
// @exclude        */Default.html
// @exclude        */Default.shtml

// @run-at         document-end
// ==/UserScript==