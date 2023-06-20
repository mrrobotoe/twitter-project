import { render } from '@redwoodjs/testing/web'

import TwitterLayout from './TwitterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TwitterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TwitterLayout />)
    }).not.toThrow()
  })
})
