import { AppProps } from "next/app"
import { GlobalStyles } from "../styles/global"

import logo from "../../public/logo.svg"
import { Container, Header } from "../styles/pages/app"

import Image from "next/future/image"

GlobalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="Ignite Shop" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}

export default App
