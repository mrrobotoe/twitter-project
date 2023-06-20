import type { ComponentMeta, ComponentStory } from '@storybook/react'

import TwitterLayout from './TwitterLayout'

export const generated: ComponentStory<typeof TwitterLayout> = (args) => {
  return <TwitterLayout {...args} />
}

export default {
  title: 'Layouts/TwitterLayout',
  component: TwitterLayout,
} as ComponentMeta<typeof TwitterLayout>
