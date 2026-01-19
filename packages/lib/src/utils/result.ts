export type SupabaseErrorShape = {
  message: string;
  details?: string | null;
  hint?: string | null;
  code?: string | null;
};

export type SupabaseResponse<T> = {
  data: T | null;
  error: SupabaseErrorShape | null;
  status?: number;
};

/**
 * Normalize Supabase responses, raising a descriptive error when needed.
 */
export const unwrapSupabaseResult = <T>(
  response: SupabaseResponse<T>,
  context: string
): T => {
  if (response.error) {
    const details = response.error.details ? ` (${response.error.details})` : "";
    throw new Error(`Supabase ${context} failed: ${response.error.message}${details}`);
  }

  if (response.data === null) {
    throw new Error(`Supabase ${context} returned no data.`);
  }

  return response.data;
};
