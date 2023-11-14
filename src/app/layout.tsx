import { getCssText } from '@/styles';
import { GlobalStyles } from '@/styles/global';
import type { Metadata } from 'next';
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'I-Shop',
  description: 'A Online Store',
  icons: {
    icon:['/favicon.ico?v=4'],
  }
}

export const Roboto_ = Roboto({subsets: ['latin'], weight: ['400', '700']});


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
        {children}

        <style
        dangerouslySetInnerHTML={{__html: `${getCssText()} ${GlobalStyles()}`}}
        />
      </body>
      
    </html>
  )
}
