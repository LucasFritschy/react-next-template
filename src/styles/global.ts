import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    /* roboto-300 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('../fonts/roboto-v29-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/roboto-v29-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* roboto-regular - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('../fonts/roboto-v29-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/roboto-v29-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* roboto-700 - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('../fonts/roboto-v29-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('../fonts/roboto-v29-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    button {
      &:hover {
        cursor: pointer;
      }
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.mainBg};
    }
  `}
`

export default GlobalStyles
