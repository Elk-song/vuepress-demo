
const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
module.exports = {
  title: 'Kylinの小屋',
  description: '一緒に勉強しよう!',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  base: "/Zql-vuepress",
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  dest: './docs/.vuepress/dist',
  evergreen: true,
  themeConfig: {
    nav: nav,
    search: true,
    searchMaxSuggestions: 10,
    sidebar: sidebar,
    sidebarDepth: 2,
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类'     // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'     // 默认文案 “标签”
      }
    },
    lastUpdated: true,// 文档最后更新更新时间
    author:"Kylin",
    startYear:"2020",
     // 如果你的文档不在仓库的根部
    docsDir:"docs",
  },

}