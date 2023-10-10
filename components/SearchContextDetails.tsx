import { SearchContextDetails } from "../generated";

export const SearchContext = (contextDetails: SearchContextDetails) => {
  return (
    <div className="pippo md:mx-auto prose bg-white rounded-3xl overflow-hidden md:max-w-4xl m-5 md:m-10 p-5">
      <div className="flex flex-row md:flex-row md:items-center">
        <div className="md:flex-shrink-0">
          <img
            className="w-48 h-48 md:w-48 md:h-64 object-cover rounded-lg md:m-5"
            src={contextDetails.thumbnail}
            alt="Thumbnail image"
          />
        </div>
        <div className="prose p-6">
          <div className="prose-2xl prose-headings font-bold tracking-tight text-gray-900">
            {contextDetails.title}
          </div>
          <p className="mt-2 text-black prose-base">{contextDetails.summary}</p>
          {/* <p className="mt-2 text-black prose-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam velit beatae soluta quasi reiciendis, accusantium vitae commodi molestiae, blanditiis atque sunt vel tenetur optio pariatur ipsum odit quo iusto quos.</p> */}
          <a
            href={contextDetails.link}
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

    // <div className="pippo md:mx-auto prose bg-white rounded-3xl overflow-hidden md:max-w-4xl m-5 md:m-10 p-5 ">
    //   <div className="flex flex-row md:flex-row items-center md:items-center">
    //     <div className="md:flex-shrink-0">
    //       <img
    //         className=" w-20 h-20 md:w-48 md:h-64 object-cover rounded-full  md:m-5"
    //         src={wiki.thumbnail}
    //         alt="Thumbnail image"
    //       />
    //     </div>
    //     <div className="prose p-6">
    //       <div className="prose-2xl prose-headings font-bold tracking-tight text-gray-900">
    //         {wiki.title}
    //       </div>

    //       <a
    //         href={wiki.link}
    //         className="button text-white  md:w-1/4 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black"
    //       >
    //         Learn More
    //       </a>
    //       {/* <a
    //                     className="button w-2/4 md:w-1/4 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 border border-black mx-4"
    //                     href="about"
    //                 >
    //                     Get other
    //                 </a> */}
    //     </div>
    //   </div>
    // </div>
  );
};
