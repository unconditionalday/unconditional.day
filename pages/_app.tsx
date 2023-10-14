import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { SWRConfig } from "swr";

interface PageProps {
  hideSearchBar?: boolean;
}
function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <SWRConfig value={{ provider: () => new Map() }}>
      <Layout hideSearchBar={pageProps.hideSearchBar}>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
