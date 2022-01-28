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
      text: 'API - Classes',
      children: [
        { text: 'Activity', link: '/docs/v1/api/activity/activity' },
        { text: 'Application', link: '/docs/v1/api/application' },
        { text: 'BaseButton', link: '/docs/v1/api/button/basebutton' },
        { text: 'Button', link: '/docs/v1/api/button/button' },
        { text: 'ButtonLink', link: '/docs/v1/api/button/buttonlink' },
        { text: 'Channel', link: '/docs/v1/api/channels/channel' },
        { text: 'TextChannelResolvable', link: '/docs/v1/api/channels/text-channel-resolvable' },
        { text: 'Client', link: '/docs/v1/api/client' },
        { text: 'Emoji', link: '/docs/v1/api/emoji' },
        { text: 'Guild', link: '/docs/v1/api/guild' },
        { text: 'User', link: '/docs/v1/api/user' },
      ]
    },
    {
      text: 'API - Typedefs',
      children: [
        { text: 'ButtonStyle', link: '/docs/v1/api/button/buttonstyle' }
      ]
    },
    {
      text: 'Framework',
      children: [
        { text: 'Events', link: '/docs/v1/framework/entities/events' },
      ]
    },
  ]
}