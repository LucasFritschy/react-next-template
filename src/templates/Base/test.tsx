import { render, screen } from '@testing-library/react'

import Base from '.'

describe('<Base />', () => {
  it('should render the children', () => {
    const { container } = render(
      <Base>
        <h1>Title</h1>
      </Base>
    )

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
