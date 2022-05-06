module.exports = {
  title: '小熊学Java',
  description: '小熊带你学Java',
  port: '7777',
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}],
    ["link", { rel: "stylesheet", href: "/iconfont/iconfont.css" }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: '作者首页', link: '/views/guide/',
      },
      {
        text: 'Java', icon: "icon-shouye",
        items:[
          {text: '数据结构与算法', link: '/views/java/dataConstructure/',icon: 'iconfont icon-file-text'},
          {text: 'JavaSE', link: '/views/java/javase/',icon: 'iconfont icon-paihangbang'},
          {text: 'JavaWeb', link: '/views/java/web/',icon: 'iconfont icon-dianying'},
          {text: 'mysql', link: '/views/java/mysql/',icon: 'iconfont icon-fuzhi'},
          {text: 'spring', link: '/views/java/spring/',icon: 'iconfont icon-sharpicons_Orca'},
        ]
      },
    ],

    sidebarDepth: 2,
    sidebar: "auto",
    lastUpdated: 'Last Updated',
    searchMaxSuggestoins: 10,
    serviceWorker: {
      updatePopup: {
        message: "有新的内容.",
        buttonText: '更新'
      }
    },
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
