import "/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "./components/layout/layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>mrxShinji`s PortFolio</title>
        <meta name='description' content='Portfolio of mrxShinji' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
