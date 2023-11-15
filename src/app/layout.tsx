import { getCssText } from '@/styles';
import { GlobalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import type { Metadata } from 'next';
import { Roboto } from "next/font/google";

import logo from '../../public/logo.svg';
import Image from 'next/image';


export const Roboto_ = Roboto({subsets: ['latin'], weight: ['400', '700']});

export const metadata: Metadata = {
  title: 'I-Shop',
  description: 'A Online Store',
  icons: {
    icon:['/favicon.ico?v=4'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={Roboto_.className}
    >
      <body>
        <Container>
          <Header>
            <Image src={logo} alt="Ignite Shop"/>
          </Header>

          {children}
        </Container>
        
        <style
        dangerouslySetInnerHTML={{__html: `${getCssText()} ${GlobalStyles()}`}}
        />
      </body>
    </html>
  )
}