import { afterEach, describe, expect, it, vi } from "vitest";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createClient } from "@supabase/supabase-js";

vi.mock("@supabase/supabase-js", () => ({
  createClient: vi.fn()
}));

const mockedCreateClient = vi.mocked(createClient);

describe("createSupabaseServerClient", () => {
  afterEach(() => {
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_ANON_KEY;
    vi.clearAllMocks();
  });

  it("returns null without environment configuration", () => {
    expect(createSupabaseServerClient()).toBeNull();
    expect(mockedCreateClient).not.toHaveBeenCalled();
  });

  it("returns a configured client when env vars exist", () => {
    process.env.SUPABASE_URL = "https://example.supabase.co";
    process.env.SUPABASE_ANON_KEY = "anon-key";
    const client = { auth: {} };

    mockedCreateClient.mockReturnValue(client as never);

    expect(createSupabaseServerClient()).toBe(client);
    expect(mockedCreateClient).toHaveBeenCalledWith(
      "https://example.supabase.co",
      "anon-key",
      {
        auth: {
          persistSession: false
        }
      }
    );
  });
});
