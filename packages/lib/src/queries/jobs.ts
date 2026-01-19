import type { SupabaseClient } from "@supabase/supabase-js";

import {
  JOB_DETAIL_VIEW,
  JOB_LISTINGS_VIEW,
  RECRUITMENT_SCHEMA
} from "../constants";
import type { JobDetail, JobListing, JobStatus } from "../models";
import { unwrapSupabaseResult } from "../utils/result";

export interface JobListingFilters {
  status?: JobStatus[];
  limit?: number;
}

/**
 * Fetch job listings from the recruitment view.
 */
export const fetchJobListings = async (
  client: SupabaseClient,
  filters: JobListingFilters = {}
): Promise<JobListing[]> => {
  let query = client
    .schema(RECRUITMENT_SCHEMA)
    .from(JOB_LISTINGS_VIEW)
    .select("*")
    .order("posted_at", { ascending: false });

  if (filters.status && filters.status.length > 0) {
    query = query.in("status", filters.status);
  }

  if (filters.limit) {
    query = query.limit(filters.limit);
  }

  const response = await query;
  return unwrapSupabaseResult(response, "fetchJobListings");
};

/**
 * Fetch a detailed job record by slug.
 */
export const fetchJobDetailBySlug = async (
  client: SupabaseClient,
  slug: string
): Promise<JobDetail> => {
  const response = await client
    .schema(RECRUITMENT_SCHEMA)
    .from(JOB_DETAIL_VIEW)
    .select("*")
    .eq("slug", slug)
    .single();

  return unwrapSupabaseResult(response, "fetchJobDetailBySlug");
};
