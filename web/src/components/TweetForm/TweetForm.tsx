import {
  Form,
  Label,
  FormError,
  SubmitHandler,
  useForm,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { Box } from 'src/styles/Box/Box.styled'
import { Stack } from 'src/styles/Stack/Stack.styled'

import { QUERY as TweetsQuery } from '../TweetsCell'

import { SubmitButton, TextArea } from './TweetForm.styled'

const CREATE = gql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      body
      createdAt
      likes
    }
  }
`

interface FormValues {
  body: string
}

const TweetForm = () => {
  const formMethods = useForm()
  const [createPost, { loading, error }] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Thank you for posting!')
      formMethods.reset()
    },
    refetchQueries: [{ query: TweetsQuery }],
  })

  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createPost({ variables: { input: { ...input, likes: 1 } } })
  }
  return (
    <Box>
      <Stack $recursive>
        <h3>Tweet away!</h3>
        <Form
          onSubmit={onSubmit}
          formMethods={formMethods}
          config={{ mode: 'onBlur' }}
          error={error}
        >
          <FormError error={error} />
          <Stack space="var(--s0)">
            <Label name="body">Tweet</Label>
            <TextArea rows={5} name="body" validation={{ required: true }} />
          </Stack>
          <SubmitButton disabled={loading}>Submit</SubmitButton>
        </Form>
      </Stack>
    </Box>
  )
}

export default TweetForm
