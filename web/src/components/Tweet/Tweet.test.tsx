import { render } from '@redwoodjs/testing/web'

import Tweet from './Tweet'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const TWEET = {
  id: 1,
  body: 'this is the body of the tweet',
  createdAt: '2023-06-18T12:34:56Z',
  likes: 1,
}

describe('Tweet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tweet tweet={TWEET} />)
    }).not.toThrow()
  })
})
