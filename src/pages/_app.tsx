import { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { Container } from "../styles/pages/app";
import { Header } from "../components/Header";
import { CartContextProvider } from "../context/context";


GlobalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Header/>
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}

export default App
