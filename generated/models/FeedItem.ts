/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeedImage } from './FeedImage';

export type FeedItem = {
    title: string;
    summary: string;
    link: string;
    source: string;
    language: string;
    image?: FeedImage;
    date: string;
};

