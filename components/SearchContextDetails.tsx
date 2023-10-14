import { SearchContextDetails } from "../generated";

export interface SearchContextProps {
  contextDetails: SearchContextDetails;
}

export const SearchContext = (props: SearchContextProps) => {
  return (
    <div className="hero-card sm:mx-auto md:mx-auto prose bg-white rounded-3xl overflow-hidden md:max-w-4xl m-5 md:m-10 p-5">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:flex-shrink-0">
          <img
            className="w-32 h-32 md:w-48 md:h-48 object-cover shadow-lg rounded-lg md:m-5"
            src={props.contextDetails.thumbnail}
            alt="Thumbnail image"
          />
        </div>
        <div className="prose text-justify md:text-start p-3 md:p-6">
          <div className="prose-xl md:prose-2xl prose-headings font-bold text-gray-900">
            {props.contextDetails.title}
          </div>
          <p className="mt-2 text-black prose-sm md:prose-base">
            {props.contextDetails.summary}
          </p>
          <div className="text-center md:text-start">
            <a
              href={props.contextDetails.link}
              className="button text-white w-2/4 md:w-1/4 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm p-2 px-4 py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
