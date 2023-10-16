import useSWR, { Fetcher } from "swr";
import { FeedItem } from "../generated/models/FeedItem";
import { DefaultService } from "../generated/services/DefaultService";
import { KeyedMutator } from "swr/_internal";

type FetcherInput = {
  key: string | null;
  query: string;
};

const fetcher: Fetcher<FeedItem[], FetcherInput> = ({ key, query }) =>
  DefaultService.getV1SearchFeed(query);

type IUseFeedsOutcome = {
  feeds: FeedItem[] | undefined;
  error: any;
  isLoading: boolean;
  mutate: KeyedMutator<FeedItem[]>;
  areFeedsEmpty: boolean;
};
type IUseFeeds = {
  (query: string | undefined): IUseFeedsOutcome;
};

const useFeeds: IUseFeeds = (query: string | undefined) => {
  const key = query ? `feed_${query}` : null;
  const defaultQuery = query !== undefined ? query : "";
  const fetcherInput: FetcherInput = { key, query: defaultQuery };
  const { data, error, isLoading, mutate } = useSWR(key, () =>
    fetcher(fetcherInput),
  );
  return {
    feeds: data,
    error,
    isLoading,
    mutate,
    areFeedsEmpty: !isLoading && !!query && (!data || data.length === 0),
  };
};

export default useFeeds;
