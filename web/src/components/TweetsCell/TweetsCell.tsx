import type { TweetsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tweet from 'src/components/Tweet'
import { Stack } from 'src/styles/Stack/Stack.styled'

export const QUERY = gql`
  query TweetsQuery {
    tweets: posts {
      id
      body
      likes
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No tweets to read!</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tweets }: CellSuccessProps<TweetsQuery>) => {
  return (
    <Stack>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  )
}
