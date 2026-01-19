import { describe, expect, it } from "vitest";

import { buildPaginationRange } from "./pagination";

describe("buildPaginationRange", () => {
  it("builds a compact range", () => {
    expect(buildPaginationRange(5, 10)).toEqual([1, "…", 4, 5, 6, "…", 10]);
  });

  it("handles short ranges", () => {
    expect(buildPaginationRange(2, 3)).toEqual([1, 2, 3]);
  });
});
