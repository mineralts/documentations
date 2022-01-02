export default {
  title: 'Mineral',
  description: 'Just playing around.',
  head: [
    ['style', { rel: 'stylesheet/css', src: 'https://cdn.tailwindcss.com' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: 'Config Reference',
        link: '/config/basics',
        activeMatch: '^/config/'
      },
      {
        text: 'Release Notes',
        link: 'https://github.com/vuejs/vitepress/releases'
      }
    ],

    sidebar: {
      '/': getGuideSidebar()
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Get started', link: '/docs/v1/getting-started' },
      ]
    },
    {
      text: 'API',
      children: [
        { text: 'Guild', link: '/docs/v1/api/guild' },
        { text: 'User', link: '/docs/v1/api/user' },
        { text: 'Message', link: '/docs/v1/api/message' },
      ]
    },
  ]
}