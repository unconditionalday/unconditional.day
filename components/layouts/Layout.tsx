import { FunctionComponent } from "react";
import Head from "next/head";
import Footer from "./Footer";
import { Header } from "./Header";
import SearchForm from "../SearchForm";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
  hideSearchBar?: boolean;
}
const Layout: FunctionComponent<LayoutProps> = ({
  children,
  hideSearchBar,
}) => {
  const router = useRouter();

  const onSubmitted = (query: string) => {
    router.push({
      pathname: `/search/${query}`,
    });
  };

  return (
    <>
      <Head>
        <title>Unconditional.</title>
        <meta name="description" content="Unconditional" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-col h-screen ">
        <Header hideTagline={hideSearchBar} />
        {!hideSearchBar && <SearchForm onSubmitted={onSubmitted} />}
        <hr />
        <main className="m-auto md:overflow-y-visible md:mb-0 md:pb-10">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
