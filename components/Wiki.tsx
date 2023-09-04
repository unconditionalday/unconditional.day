import { WikiResult } from "../generated";

export const Wiki = (wiki: WikiResult) => {
  return (
    <div className="mx-auto prose bg-white border border-black rounded-3xl overflow-hidden max-w-4xl m-10 p-5">
      <div className="flex items-center">
        <div className="md:flex-shrink-0">
          <img
            className="w-48 h-64 object-cover md:w-48 rounded-lg m-5"
            src={wiki.thumbnail}
            alt="Thumbnail image"
          />
        </div>
        <div className="prose p-6">
          <div className="prose-2xl prose-headings font-bold tracking-tight text-gray-900">
            {wiki.title}
          </div>
          <p className="mt-2 text-black prose-base">{wiki.summary}</p>
          <a
            href={wiki.link}
            className="button text-white w-2/4 md:w-1/4 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
          >
            Learn More
          </a>
          {/* <a
                        className="button w-2/4 md:w-1/4 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black mx-4"
                        href="about"
                    >
                        Get other
                    </a> */}
        </div>
      </div>
    </div>
  );
};
