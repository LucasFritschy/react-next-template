import styled, { css } from 'styled-components'
import theme from 'styles/theme'

const WrapperModifier = {
  primary: css`
    color: ${theme.colors.primary};
  `,
  secondary: css`
    color: ${theme.colors.secondary};
  `
}

type WrapperProps = {
  color: 'primary' | 'secondary'
}

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors.black};
    ${WrapperModifier[color]}
  `}
`
