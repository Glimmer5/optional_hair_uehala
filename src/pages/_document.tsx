import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../lib/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
      <ColorModeScript initialColorMode={theme.config.inirialColorMode}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
