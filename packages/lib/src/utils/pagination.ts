/**
 * Build a compact pagination range with ellipses.
 */
export const buildPaginationRange = (
  currentPage: number,
  totalPages: number
): Array<number | "…"> => {
  const clampedCurrent = Math.max(1, Math.min(currentPage, totalPages));
  const range: Array<number | "…"> = [];

  for (let page = 1; page <= totalPages; page += 1) {
    const isEdge = page === 1 || page === totalPages;
    const isNearCurrent = Math.abs(page - clampedCurrent) <= 1;

    if (isEdge || isNearCurrent) {
      range.push(page);
    } else if (range[range.length - 1] !== "…") {
      range.push("…");
    }
  }

  return range;
};
