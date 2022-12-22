

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    )
}
