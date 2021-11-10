import { screen } from '@testing-library/react'

import renderWithTheme from 'utils/tests/helpers'
import theme from 'styles/theme'

import Title from '.'

describe('<Title />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Title title="Title" color="primary" />)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /title/i })).toHaveStyle(
      `color: ${theme.colors.primary}`
    )
  })
})
