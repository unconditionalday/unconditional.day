import { FeedItem } from "../generated";

export interface FeedsProps {
  feeds: FeedItem[];
}

export const Feeds = (props: FeedsProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
      {props.feeds.map((feed) => (
        <a
          key={feed.link}
          href={feed.link}
          className="article md:m-0 bg-white p-0 md:p-6 block w-5/6 md:max-w-sm md:max-h-sm rounded-lg border border-black hover:shadow-2xl dark:bg-black dark:border-black dark:hover:bg-black"
        >
          <h6 className="font-extralight text-xs md:text-sm md:p-0">
            {feed.source}
          </h6>
          <h5 className="p-2 md:p-2 text-xl md:text-2xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
            {feed.title}
          </h5>
          <hr />
          <p className="m-2 md:m-2 text-sm md:text-base feed text-justify text-gray-700 dark:text-gray-400">
            {feed.summary}
          </p>
        </a>
      ))}
    </div>
  );
};
