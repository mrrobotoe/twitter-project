// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TweetForm> = (args) => {
//   return <TweetForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { ComponentMeta } from '@storybook/react'
import { CreatePostMutation, CreatePostMutationVariables } from 'types/graphql'

import TweetForm from './TweetForm'

export const generated = () => {
  mockGraphQLMutation<CreatePostMutation, CreatePostMutationVariables>(
    'CreatePostMutation',
    (variables, { ctx }) => {
      const id = Math.floor(Math.random() * 1000)
      ctx.delay(1000)
      console.log(variables)
      return {
        createPost: {
          id,
          body: variables.input.body,
          likes: 1,
          createdAt: new Date().toISOString(),
        },
      }
    }
  )
  return <TweetForm />
}

export default {
  title: 'Components/TweetForm',
  component: TweetForm,
} as ComponentMeta<typeof TweetForm>
