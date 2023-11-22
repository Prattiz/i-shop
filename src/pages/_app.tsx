import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";


GlobalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header/>
      <Component {...pageProps} />
    </Container>
  )
}

export default App
