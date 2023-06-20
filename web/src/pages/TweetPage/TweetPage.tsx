import { MetaTags } from '@redwoodjs/web'

import TweetCell from 'src/components/TweetCell'

interface Props {
  id: number
}

const TweetPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Tweet" description="Tweet page" />

      <TweetCell id={id} />
    </>
  )
}

export default TweetPage
