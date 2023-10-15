import { FeedItem } from "../generated";

export interface FeedsProps {
  feeds: FeedItem[];
}

export const Feeds = (props: FeedsProps) => {
  return (
    <div className="md:columns-2 lg:columns-3 columns-1 gap-8 px-8 mb-10 container">
      {props.feeds.map((feed) => (
        <div
          key={feed.link}
          className="break-inside-avoid-column article w-full bg-white p-0 md:p-6 block mb-8 md:mb-4 rounded-lg border border-black  hover:shadow-xl dark:bg-black dark:border-black dark:hover:bg-black"
        >
          <a href={feed.link} target={"blank"}>
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
          </a>
        </div>
      ))}
    </div>
  );
};
