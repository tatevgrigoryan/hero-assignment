/**
 * Ensure a string is not empty after trimming whitespace.
 */
export const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};
