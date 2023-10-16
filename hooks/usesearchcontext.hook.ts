import useSWR, { Fetcher } from "swr";
import { SearchContextDetails } from "../generated/models/SearchContextDetails";
import { DefaultService } from "../generated/services/DefaultService";
import { KeyedMutator } from "swr/_internal";
import { FeedItem } from "../generated/models/FeedItem";

type FetcherInput = {
  key: string | null;
  query: string;
};

const fetcher: Fetcher<SearchContextDetails, FetcherInput> = ({ key, query }) =>
  DefaultService.getV1SearchContext(query);

type IUseSearchContextDetailsOutcome = {
  searchContextDetails: SearchContextDetails | undefined;
  error: any;
  isLoading: boolean;
  mutate: KeyedMutator<SearchContextDetails>;
  isEmpty: boolean;
};
type IUseSearchContextDetails = {
  (query: string | undefined): IUseSearchContextDetailsOutcome;
};

const useSearchContext: IUseSearchContextDetails = (
  query: string | undefined,
) => {
  const key = query ? `context_${query}` : null;
  const defaultQuery = query !== undefined ? query : "";
  const fetcherInput: FetcherInput = { key, query: defaultQuery };
  const { data, error, isLoading, mutate } = useSWR(key, () =>
    fetcher(fetcherInput),
  );

  const validData =
    data &&
    data.language != "" &&
    data.link != "" &&
    data.summary != "" &&
    data.thumbnail;

  return {
    searchContextDetails: data,
    error,
    isLoading,
    mutate,
    isEmpty: !isLoading && !validData,
  };
};

export default useSearchContext;
