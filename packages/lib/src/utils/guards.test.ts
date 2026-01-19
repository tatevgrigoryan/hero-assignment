import { describe, expect, it } from "vitest";

import { isNonEmptyString } from "./guards";

describe("isNonEmptyString", () => {
  it("validates strings", () => {
    expect(isNonEmptyString("hello")).toBe(true);
    expect(isNonEmptyString(" ")).toBe(false);
    expect(isNonEmptyString(12)).toBe(false);
  });
});
