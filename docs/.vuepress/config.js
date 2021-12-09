const { description } = require('../../package')
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'DART Lab Manual',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  base: "/manual/",

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
        {
            text: 'Editing the Manual',
            link: '/editing-the-manual/',
        },
        {
            text: 'Code of Conduct',
            link: '/code-of-conduct/',
        },
        {
            text: 'Language Guide',
            link: '/lang-guide/'},
        {
            text: 'Admin and Computing',
            link: '/admin-and-computing/'},
        {
            text: 'Contacts',
            link: '/contacts/',
        },
    ],
    sidebar: getSidebar()
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

// this function used if using folders for documents
// function getSidebar() {
//     const folders = []
//         fs.readdirSync(`${__dirname}/..`)
//         .forEach(item => {
//             console.log(item)
//             if (item.toLowerCase() != ".vuepress" &&
//                 fs.statSync(`${__dirname}/../${item}`).isDirectory()) {
//                 folders.push(`/${item}/`)
//             }
//         })
//     return folders;
// }

function getSidebar() {
    const docs = []
        fs.readdirSync(`${__dirname}/..`)
        .forEach(item => {
            console.log(item)
            if (fs.statSync(`${__dirname}/../${item}`).isFile() && item.toLowerCase() != "index.md") {
                docs.push(`/${item}`)
            } else if (item.toLowerCase() != ".vuepress" &&
                fs.statSync(`${__dirname}/../${item}`).isDirectory()) {
                docs.push(`/${item}/`)
            }
        })
    return docs;
}
