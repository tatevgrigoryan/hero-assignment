/**
 * Canonical schema name for Supabase recruitment data.
 */
export const RECRUITMENT_SCHEMA = "recruitment";

/**
 * Public views used for read-only queries.
 */
export const JOB_LISTINGS_VIEW = "job_listings_view";
export const JOB_DETAIL_VIEW = "job_detail_view";
export const CANDIDATE_PIPELINE_VIEW = "candidate_pipeline_view";

/**
 * Public RPC functions used for write operations with RLS enforcement.
 */
export const SUBMIT_APPLICATION_FUNCTION = "submit_application";
export const WITHDRAW_APPLICATION_FUNCTION = "withdraw_application";
