import { FormEvent, FunctionComponent, useState } from "react";

interface SearchFormProps {
  onSubmitted: (query: string) => void;
}
const SearchForm: FunctionComponent<SearchFormProps> = ({ onSubmitted }) => {
  const [query, setQuery] = useState<string>("");

  const handleQuerySubmitRequest = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitted(query);
  };

  return (
    <form
      className="w-80 mx-auto md:p-0 mb-10"
      onSubmit={handleQuerySubmitRequest}
    >
      <label
        htmlFor="default-search"
        className="text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <div className="flex justify-center items-center text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="default-search"
            className="outline outline-0 md:p-4 md:pl-10 text-center md:text-start bg-gray-50 w-full h-14 md:h-auto text-md md:text-sm"
            placeholder="Start search..."
            required
          ></input>
          <button
            type="submit"
            className="text-white mr-2 md:h-auto w-2/4 md:w-1/2 bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm md:text-sm p-2 md:px-4 md:py-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black "
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
