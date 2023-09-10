import useSWR, { Fetcher } from "swr";
import { FeedItem } from "../models/FeedItem";
import { DefaultService } from "../services/DefaultService";
import { KeyedMutator } from "swr/_internal";

const fetcher: Fetcher<FeedItem[], string> = (query) =>
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
  const { data, error, isLoading, mutate } = useSWR(query, fetcher);
  return {
    feeds: data,
    error,
    isLoading,
    mutate,
    areFeedsEmpty: !isLoading && !!query && (!data || data.length === 0),
  };
};

export default useFeeds;
