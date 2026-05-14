// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', // API默认请求地址,可以配置成自己的地址例如：https://[xxxxx].notion.site/api/v3
  // Important page_id！！！Duplicate Template from  https://tanghh.notion.site/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME: process.env.NEXT_PUBLIC_THEME || 'simple', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 claude,endspace,example,fukasawa,fuwari,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, // e.g if leave this empty, current year will be used.

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, // 更新缓存间隔 单位(秒)；即每个页面有60秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '千之让', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '可是啊，总有那风吹不散的认真。', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://tangly1024.com', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '千之让, 博客', // 网站关键词 英文逗号隔开
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXX
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', // 备案查询链接，如果用了萌备等备案请在这里填写
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', // 公安备案号，例如 '浙公网安备3xxxxxxxx8号'

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
// 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_SHOW_LRC: process.env.NEXT_PUBLIC_MUSIC_PLAYER_SHOW_LRC || false, // 是否展示歌词（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_ORDER: 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [ // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '胡广生 - 任素汐',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E4%BB%BB%E7%B4%A0%E6%B1%90-%E8%83%A1%E5%B9%BF%E7%94%9F.mp3',
      cover: 'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '三百六十五里路 - 岩贵',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E4%B8%89%E7%99%BE%E5%85%AD%E5%8D%81%E4%BA%94%E9%87%8C%E8%B7%AF-%E5%B2%A9%E8%B4%B5-305049053-320.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '你瞒我瞒 - 陈柏宇',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E4%BD%A0%E7%9E%92%E6%88%91%E7%9E%92%20-%20%E9%99%88%E6%9F%8F%E5%AE%87.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '嘉宾(粤语) - 张远',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E5%BC%A0%E8%BF%9C-%E5%98%89%E5%AE%BE(%E7%B2%A4%E8%AF%AD%E7%89%88).mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '哎呦我的姑娘 - 抠抠',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E6%8A%A0%E6%8A%A0-%E5%93%8E%E5%91%A6%E6%88%91%E7%9A%84%E5%A7%91%E5%A8%98.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '经过 - 陈楚生',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E7%BB%8F%E8%BF%87(%E7%8B%AC%E5%94%B1%E7%89%88)%20-%20%E9%99%88%E6%A5%9A%E7%94%9F.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '烟雨唱扬州 - 葛漂亮',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E8%91%9B%E6%BC%82%E4%BA%AE-%E7%83%9F%E9%9B%A8%E5%94%B1%E6%89%AC%E5%B7%9E(%E5%A5%B3%E7%89%88).mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '我不是伟人 - 陈小春',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E9%99%88%E5%B0%8F%E6%98%A5-%E6%88%91%E4%B8%8D%E6%98%AF%E4%BC%9F%E4%BA%BA.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '漂洋过海来看你 - 邰正宵',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E6%BC%82%E6%B4%8B%E8%BF%87%E6%B5%B7%E6%9D%A5%E7%9C%8B%E4%BD%A0.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '春风十里 - 冯提莫',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E5%86%AF%E6%8F%90%E8%8E%AB%20-%20%E6%98%A5%E9%A3%8E%E5%8D%81%E9%87%8C.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '富士山下 - 陈奕迅',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E9%99%88%E5%A5%95%E8%BF%85%20-%20%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '恋曲1990 - 孙露',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E5%AD%99%E9%9C%B2-%E6%81%8B%E6%9B%B21990.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '真爱来敲门 - 蔡仁皓',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E8%94%A1%E4%BB%81%E7%9A%93%20-%20%E7%9C%9F%E7%88%B1%E6%9D%A5%E6%95%B2%E9%97%A8.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },    {
      name: 'Susan说 - 陶喆',
      artist: '千之让的收藏',
      url: 'https://music.glj520.eu.org/%E9%99%B6%E5%96%86-Susan%E8%AF%B4.mp3',
      cover: 'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },

  ],

  // 其它复杂配置
  // 原配置文件过长，且并非所有人都会用到，故此将配置拆分到/conf/目录下, 按需找到对应文件并修改即可
  ...require('./conf/comment.config'), // 评论插件
  ...require('./conf/contact.config'), // 作者联系方式配置
  ...require('./conf/post.config'), // 文章与列表配置
  ...require('./conf/analytics.config'), // 站点访问统计
  ...require('./conf/image.config'), // 网站图片相关配置
  ...require('./conf/font.config'), // 网站字体
  ...require('./conf/right-click-menu'), // 自定义右键菜单相关配置
  ...require('./conf/code.config'), // 网站代码块样式
  ...require('./conf/animation.config'), // 动效美化效果
  ...require('./conf/widget.config'), // 悬浮在网页上的挂件，聊天客服、宠物挂件、音乐播放器等
  ...require('./conf/ad.config'), // 广告营收插件
  ...require('./conf/plugin.config'), // 其他第三方插件 algolia全文索引
  ...require('./conf/performance.config'), // 性能优化配置
  ...require('./conf/top-tag.config'), // 置顶文章全局配置

  // 高级用法
  ...require('./conf/layout-map.config'), // 路由与布局映射自定义，例如自定义特定路由的页面布局
  ...require('./conf/notion.config'), // 读取notion数据库相关的扩展配置，例如自定义表头
  ...require('./conf/dev.config'), // 开发、调试时需要关注的配置

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu类型的菜单，替代了3.12版本前的Page类型

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。

  ...require('./conf/techgrow.config'), // 公众号导流插件（TechGrow）

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语打字效果,Hexo,Matery主题支持, 英文逗号隔开多个欢迎语。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，我是一个程序员, Hi，我是一个打工人,Hi，我是一个干饭人,欢迎来到我的博客🎉',

  // uuid重定向至 slug
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
