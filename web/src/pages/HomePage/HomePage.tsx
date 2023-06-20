import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TweetsCell from 'src/components/TweetsCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <TweetsCell />
    </>
  )
}

export default HomePage
