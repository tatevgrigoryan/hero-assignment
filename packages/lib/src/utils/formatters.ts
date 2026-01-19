/**
 * Format a currency string for compensation ranges.
 */
export const formatCurrencyRange = (
  min: number,
  max: number,
  currency: string = "USD"
): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  });

  return `${formatter.format(min)} - ${formatter.format(max)}`;
};

/**
 * Normalize a location string for consistent display.
 */
export const formatLocation = (city: string, region?: string | null): string => {
  if (!region) {
    return city;
  }

  return `${city}, ${region}`;
};

/**
 * Render an accessible relative time label.
 */
export const formatRelativeDate = (isoDate: string, now = new Date()): string => {
  const date = new Date(isoDate);
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays <= 0) {
    return "Today";
  }

  if (diffInDays === 1) {
    return "1 day ago";
  }

  return `${diffInDays} days ago`;
};
