import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import { Header } from "../components/Header";

const About: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <article className="prose lg:prose-xl p-10 md:p-5 md:m-auto">
        <h1>
          A place free of any outside influence for an unconditional and
          spontaneous information research.
        </h1>
        <p>
          Unconditional aims to be a place free of any outside influence for
          free and spontaneous information research. This project was born above
          all from a personal need: To inform ourselves by developing our own
          critical sense and thinking and not to let someone else do it for us.
        </p>
        <h1>Where you are the only one who can decide what to think.</h1>
        <p>
          {" "}
          This project uses no targeting system, no recommendation or ranking
          system, and no profiling. The &quot;database&quot; referred to is a
          public static file made available to the community, for the community.
          In fact, the sources are decided by it. The only thing that is done is
          to make the information available in a structured way, so that it can
          be easily consulted and used.
        </p>
        <h1>It is much simpler than you think, help us.</h1>
        <p>
          The project is completely <Link href="/">open source</Link> and anyone
          can contribute by improving its code,usability and the sources of
          information it refers to. The server is re-deployed hourly by indexing
          and serving the new articles served by the sources it finds in the{" "}
          <Link href="/">public source file</Link>. That's it! nothing more and
          nothing less.
        </p>
        <h1>The most important thing</h1>
        <p>
          {" "}
          Let us be clear, the project is intended to provide independent and
          free information, not disinformation. We in no way accept biased,
          disrespectful and discriminatory sources We believe in public
          information and respect the great work that different news outlets do
          every day.{" "}
        </p>

        <Link href="/" legacyBehavior>
          <a className="font-bold md:w-1/2 text-xl md:text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black rounded-lg p-3 block">
            Start your Unconditional.
          </a>
        </Link>
      </article>

      <Footer />
    </div>
  );
};

export default About;
