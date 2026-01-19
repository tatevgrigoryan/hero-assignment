/**
 * @bluehero/lib exports typed domain models, Supabase query helpers, and shared utilities.
 */

export type {
  ApplicationInput,
  ApplicationResult,
  CandidatePipelineSummary,
  EmploymentType,
  JobDetail,
  JobListing,
  JobStatus,
  WithdrawalResult
} from "./models";

export {
  CANDIDATE_PIPELINE_VIEW,
  JOB_DETAIL_VIEW,
  JOB_LISTINGS_VIEW,
  RECRUITMENT_SCHEMA,
  SUBMIT_APPLICATION_FUNCTION,
  WITHDRAW_APPLICATION_FUNCTION
} from "./constants";

export type { JobListingFilters } from "./queries/jobs";
export { fetchJobDetailBySlug, fetchJobListings } from "./queries/jobs";

export { submitApplication, withdrawApplication } from "./queries/applications";

export { formatCurrencyRange, formatLocation, formatRelativeDate } from "./utils/formatters";
export { isNonEmptyString } from "./utils/guards";
export { buildPaginationRange } from "./utils/pagination";
export type { SupabaseErrorShape, SupabaseResponse } from "./utils/result";
export { unwrapSupabaseResult } from "./utils/result";
