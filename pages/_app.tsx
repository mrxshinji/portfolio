import "/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
import Head from "next/head";
import projects from "lib/pastWorkToUse.json";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>mrxShinji`s PortFolio</title>
        <meta name='description' content='Portfolio of mrxShinji' />
        <link rel='icon' href='/favicon.ico' />
        {projects.map((project, idx) => {
          return (
            <link key={idx} rel='preload' href={project.link} as='image' />
          )
        })}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
