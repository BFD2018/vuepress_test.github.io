module.exports = {
  title: '小熊学院',
  description: '小熊带你学Java',
  dest: './dist',
  port: '7777',
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: '懵逼指南', link: '/guide/',
      },
      {
        text: 'Java', link: '/views/java/', icon: 'reco-document',
        items:[
          {text: '数据结构与算法', link: '/views/java/dataConstructure/',icon: ''},
          {text: 'JavaSE', link: '/views/java/javase/',icon: ''},
          {text: 'JavaWeb', link: '/views/java/web/',icon: ''},
          {text: 'mysql', link: '/views/java/mysql/',icon: ''},
          {text: 'spring', link: '/views/java/spring/',icon: ''},
        ]
      },
    ],
    sidebar: {'/guide/':[
        {
          title:'新手指南',
          collapsable: true,
          children:[
            '/guide/notes/one',
          ]
        }
      ]
    },
    sidebarDepth: 2,
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
