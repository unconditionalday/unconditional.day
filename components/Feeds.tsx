import { FeedItem } from "../generated";
import { useState } from "react";

export interface FeedsProps {
  feeds: FeedItem[];
}

export const Feeds = (props: FeedsProps) => {
  const [hoveredFeed, setHoveredFeed] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredFeed(link);
  };

  const handleMouseLeave = () => {
    setHoveredFeed(null);
  };

  return (
    <div className="md:columns-2 lg:columns-3 columns-1 gap-8 px-8 mb-10 mt-10 container">
      {props.feeds.map((feed) => (
        <div key={feed.link} className="relative">
          <div
            onMouseEnter={() => handleMouseEnter(feed.link)}
            onMouseLeave={handleMouseLeave}
            className="break-inside-avoid-column article w-full bg-white p-0 md:p-6 block mb-8 md:mb-4 rounded-lg border border-black hover:shadow-xl dark:bg-black dark:border-black dark:hover:bg-black"
          >
            <div
              className={`${hoveredFeed === feed.link ? "filter blur-sm" : ""}`}
            >
              <h6 className="font-extralight text-sm md:text-sm py-2">
                {feed.source}
              </h6>
              <h5 className="p-2 md:p-2 text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
                {feed.title}
              </h5>
              <hr />
              <p className="m-2 text-base py-2 text-summarize leading-relaxed text-gray-700 dark:text-gray-400">
                {feed.summary}
              </p>
            </div>
          </div>
          {hoveredFeed === feed.link && (
            <div
              onMouseEnter={() => handleMouseEnter(feed.link)}
              onMouseLeave={handleMouseLeave}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="flex flex-row items-center">
                <button className="text-white mr-2 md:h-auto w-2/4 md:w-1/2 bg-black hover:bg-black hover:shadow-xl focus:outline-none font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black">
                  Find Similarities
                </button>
                <button className="text-white mr-2 md:h-auto w-2/4 md:w-1/2 bg-black hover:bg-black hover:shadow-xl focus:outline-none font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black">
                  Go To Article
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
