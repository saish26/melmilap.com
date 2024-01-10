import "@/styles/globals.css";
import "@/assets/scss/styles.scss";
import DefaultLayout from "@/layouts/DefaultLayout";
import type { AppProps } from "next/app";
import { NextComponentType, NextPageContext } from "next";
import MantineTheme from "@/plugins/theme";
import Head from "next/head";

type AppPropsWithLayout = AppProps & {
  Component: NextComponentType<NextPageContext, any, any> & {
    Layout?: React.ComponentType<any>;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#317EFB" />
        <title>melmilap.com</title>
      </Head>
      <MantineTheme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineTheme>
    </>
  );
}
