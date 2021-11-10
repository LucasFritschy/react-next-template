import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>React Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon.svg" />
        <link rel="apple-touch-icon" href="/img/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="React / Next JS Boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
