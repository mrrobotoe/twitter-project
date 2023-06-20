import type { Post } from 'types/graphql'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { Box } from 'src/styles/Box/Box.styled'
import { Cluster } from 'src/styles/Cluster/Cluster.styled'
import { Icon, WithIcon } from 'src/styles/Icon/Icon.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { QUERY as TweetsQuery } from '../TweetsCell'

import CommentLogo from './commentIcon.svg'
import LikeLogo from './likeIcon.svg'

const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const UPDATE = gql`
  mutation UpdatePostMutation($id: Int!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      body
      createdAt
      likes
    }
  }
`
interface Props {
  tweet: Post
}

const Tweet = ({ tweet }: Props) => {
  const [updatePost, { loading, error }] = useMutation(UPDATE, {
    onCompleted: () => {
      toast.success('Thanks for the like!')
    },
    refetchQueries: [{ query: TweetsQuery }],
  })

  const onClick = () => {
    updatePost({
      variables: {
        id: tweet.id,
        input: { body: tweet.body, likes: tweet.likes + 1 },
      },
    })
  }

  return (
    <Box padding="0.5" $borderThickness="12">
      <Stack as="article">
        <Box $borderThickness="0">
          <p>{tweet.body}</p>
        </Box>
        <Box $borderThickness="0">
          <span>Posted at: {formattedDate(tweet.createdAt)}</span>
        </Box>
        <Box $borderThickness="0">
          <Cluster style={{ zIndex: 3 }}>
            <Box padding="0.5" $borderThickness="0">
              <WithIcon>
                <Icon $withIcon onClick={onClick}>
                  <LikeLogo />
                </Icon>
                {tweet.likes}
              </WithIcon>
            </Box>
            <Box padding="0.5" $borderThickness="0">
              <WithIcon>
                <Icon $withIcon onClick={() => console.log('comment')}>
                  <CommentLogo />
                </Icon>
                0
              </WithIcon>
            </Box>
          </Cluster>
        </Box>
      </Stack>
    </Box>
  )
}

export default Tweet
