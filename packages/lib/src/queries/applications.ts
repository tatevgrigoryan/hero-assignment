import type { SupabaseClient } from "@supabase/supabase-js";

import {
  RECRUITMENT_SCHEMA,
  SUBMIT_APPLICATION_FUNCTION,
  WITHDRAW_APPLICATION_FUNCTION
} from "../constants";
import type {
  ApplicationInput,
  ApplicationResult,
  WithdrawalResult
} from "../models";
import { unwrapSupabaseResult } from "../utils/result";

/**
 * Submit a new application via a secured RPC function.
 */
export const submitApplication = async (
  client: SupabaseClient,
  payload: ApplicationInput
): Promise<ApplicationResult> => {
  const response = await client
    .schema(RECRUITMENT_SCHEMA)
    .rpc(SUBMIT_APPLICATION_FUNCTION, {
      job_id: payload.jobId,
      full_name: payload.fullName,
      email: payload.email,
      resume_url: payload.resumeUrl,
      portfolio_url: payload.portfolioUrl ?? null,
      cover_letter: payload.coverLetter ?? null
    });

  return unwrapSupabaseResult(response, "submitApplication");
};

/**
 * Withdraw a candidate application using a public RPC function.
 */
export const withdrawApplication = async (
  client: SupabaseClient,
  applicationId: string
): Promise<WithdrawalResult> => {
  const response = await client
    .schema(RECRUITMENT_SCHEMA)
    .rpc(WITHDRAW_APPLICATION_FUNCTION, {
      application_id: applicationId
    });

  return unwrapSupabaseResult(response, "withdrawApplication");
};
