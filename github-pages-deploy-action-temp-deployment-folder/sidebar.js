// 侧边栏对象
// sidebar: 'auto'
// 不同子路径下的页面会使用不同的侧边栏
const SIDEBAR = {
    '/fronttech/': [
      {
        text: 'fronttech',
        children: ['/fronttech/vue/component/encapsulation/example1.md', '/fronttech/vuepress/vuepress.md'],
      },
    ],
    '/oastudy/': [
      {
        text: 'oastudy',
        children: ['/oastudy/README.md'],
      },
    ],
}
export {
    SIDEBAR
}