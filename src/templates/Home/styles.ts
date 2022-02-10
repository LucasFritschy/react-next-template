import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 130rem;
      margin: 0 auto;
      background-color: ${theme.colors.white};
    `}
`
