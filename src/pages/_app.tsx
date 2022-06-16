import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from '../contexts/SessionContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}
