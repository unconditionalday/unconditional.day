/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServerBuildVersion } from "./ServerBuildVersion";
import type { SourceReleaseVersion } from "./SourceReleaseVersion";

export type ServerVersion = {
  source: SourceReleaseVersion;
  build: ServerBuildVersion;
};
