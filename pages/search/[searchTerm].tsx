import { NextPage } from "next";
import { useRouter } from "next/router";
import Loading from "../../components/Loading";
import { Feeds } from "../../components/Feeds";
import useFeeds from "../../generated/hooks/usefeeds.hook";
import useSearchContext from "../../generated/hooks/usesearchcontext.hook";
import { SearchContext } from "../../components/SearchContextDetails";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  let query = searchTerm as string;
  const { feeds, isLoading, areFeedsEmpty } = useFeeds(query);
  const { searchContextDetails, isEmpty } = useSearchContext(
    areFeedsEmpty ? undefined : query,
  );

  return (
    <>
      {areFeedsEmpty && (
        <div className="flex flex-col p-5 rounded-lg justify-center items-center m-auto md:mb-0 md:pb-10">
          <h1 className="text-2xl md:text-4xl font-black">No feeds found.</h1>
          <p className="text-sm md:text-md font-light">
            Try searching for something else.
          </p>
        </div>
      )}
      {searchContextDetails && !isEmpty && (
        <SearchContext contextDetails={searchContextDetails} />
      )}
      {isLoading && <Loading />}
      {feeds && <Feeds feeds={feeds} />}
    </>
  );
};

export default SearchPage;
