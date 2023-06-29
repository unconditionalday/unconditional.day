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
          Unconditional aims to provide a platform for independent and
          unfiltered information research, free from external influences. It was
          primarily motivated by a personal desire to empower ourselves through
          critical thinking, rather than relying on others for information.
        </p>
        <h1>You are the only one who can decide what to think.</h1>
        <p>
          {" "}
          This project does not employ any targeting, recommendation or ranking
          system, nor does it utilize profiling techniques. It is a simple
          search engine that indexes and serves information from a variety of
          sources that are not filtered or ranked in any way. The sources list
          is a public static file that anyone can contribute to. In few words:
          <ul>
            <li>
              There is no tracking,profiling,ranking,targeting and
              reccomendation.
            </li>
            <li>
              The community itself contributes to populate the list of sources
              to be served, resulting in a cluster of information that is:
              Apolitical and Unbiased.{" "}
            </li>
          </ul>
        </p>
        <h1>It is much simpler than you think, help us.</h1>
        <p>
          The project is completely{" "}
          <Link href="https://github.com/unconditionalday">open source</Link>{" "}
          and anyone can contribute by improving its code,usability and the
          sources of information it refers to. The server is re-deployed hourly
          by indexing and serving the new articles served by the sources it
          finds in the{" "}
          <Link href="https://github.com/unconditionalday/source">
            public source file
          </Link>
          . That's it! nothing more and nothing less.
        </p>
        <h1>Let us be clear</h1>
        <p>
          {" "}
          The project's main objective is to offer unbiased and free
          information, not misinformation. We strongly reject any sources that
          are biased, disrespectful, or discriminatory. We uphold the value of
          public information and appreciate the commendable efforts of various
          news agencies on a daily basis.{" "}
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
