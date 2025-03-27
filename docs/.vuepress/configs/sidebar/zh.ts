import type { SidebarConfig } from 'vuepress'

export const zh: SidebarConfig = {
  '/components': [
    {
      text: '组件',
      children: [
        {
          text: 'Button 按钮',
          link: '/components/c-button/',
        },
        {
          text: 'Checkbox 多选框',
          link: '/components/c-checkbox/',
        },
      ],
    },
  ],
}
