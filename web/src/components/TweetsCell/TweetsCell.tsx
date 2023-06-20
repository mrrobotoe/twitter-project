import type { TweetsQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Tweet from 'src/components/Tweet'
import { Stack } from 'src/styles/Stack/Stack.styled'

import TweetForm from '../TweetForm/TweetForm'

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

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tweets }: CellSuccessProps<TweetsQuery>) => {
  return (
    <Stack>
      <TweetForm />
      {tweets.map((tweet) => (
        // <Link
        //   style={{ textDecoration: 'none' }}
        //   key={tweet.id}
        //   to={routes.tweet({ id: tweet.id })}
        // >
        <Tweet key={tweet.id} tweet={tweet} />
        // </Link>
      ))}
    </Stack>
  )
}
