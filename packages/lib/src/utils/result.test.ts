import { describe, expect, it } from "vitest";

import { unwrapSupabaseResult } from "./result";

describe("unwrapSupabaseResult", () => {
  it("returns data when present", () => {
    const response = { data: { ok: true }, error: null };
    expect(unwrapSupabaseResult(response, "test")).toEqual({ ok: true });
  });

  it("throws on errors", () => {
    const response = { data: null, error: { message: "boom" } };
    expect(() => unwrapSupabaseResult(response, "test")).toThrow(
      "Supabase test failed: boom"
    );
  });

  it("throws when data is null", () => {
    const response = { data: null, error: null };
    expect(() => unwrapSupabaseResult(response, "empty")).toThrow(
      "Supabase empty returned no data."
    );
  });
});
