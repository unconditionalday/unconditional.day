/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedItem } from "../models/FeedItem";
import type { SearchContextDetails } from "../models/SearchContextDetails";
import type { ServerVersion } from "../models/ServerVersion";

import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class DefaultService {
  /**
   * @param query
   * @returns FeedItem OK
   * @throws ApiError
   */
  public static getV1SearchFeed(
    query: string,
  ): CancelablePromise<Array<FeedItem>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/search/feed/{query}",
      path: {
        query: query,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * @param query
   * @returns SearchContextDetails OK
   * @throws ApiError
   */
  public static getV1SearchContext(
    query: string,
  ): CancelablePromise<SearchContextDetails> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/search/context/{query}",
      path: {
        query: query,
      },
      errors: {
        500: `Internal Server Error`,
      },
    });
  }

  /**
   * Your GET endpoint
   * @param requestBody
   * @returns ServerVersion OK
   * @throws ApiError
   */
  public static getV1Version(
    requestBody?: any,
  ): CancelablePromise<ServerVersion> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/v1/version",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
