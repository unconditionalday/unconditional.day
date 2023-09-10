import { NextPage } from "next";
import Loading from "../../components/Loading";
import { Feeds } from "../../components/Feeds";
import useFeeds from "../../generated/hooks/usefeeds.hook";
import { useRouter } from "next/router";

const SearchPage: NextPage = () => {
  const router = useRouter();
  const { searchTerm } = router.query;
  const { feeds, isLoading, areFeedsEmpty } = useFeeds(searchTerm as string);
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
      <main className="m-auto md:mb-0 md:pb-10 overflow-y-scroll max-h-screen md:overflow-y-visible md:max-h-full">
        {isLoading && <Loading />}
        {feeds && <Feeds feeds={feeds} />}
      </main>
    </>
  );
};

export default SearchPage;
