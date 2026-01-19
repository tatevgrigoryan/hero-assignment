import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names with conditional logic.
 */
export const cn = (...inputs: Array<string | undefined | null | false>) => {
  return twMerge(clsx(inputs));
};
