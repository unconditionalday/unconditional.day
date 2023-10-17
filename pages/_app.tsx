import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import useIsMobile from "../hooks/useismobile.hook";

interface PageProps {
  hideSearchBar?: boolean;
  hideTagLine?: boolean;
  isMobile: boolean;
}

function MyApp({ Component, pageProps }: AppProps<PageProps>) {
  const isMobile = useIsMobile();

  return (
    <Layout
      hideSearchBar={pageProps.hideSearchBar}
      hideTagLine={pageProps.hideTagLine}
      isMobile={isMobile}
    >
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
