import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        mode="wait"
        initial={true}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  );
}
