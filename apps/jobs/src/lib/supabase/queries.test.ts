import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchRoleListings } from "@/lib/supabase/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getRoleListings } from "@/data/roles";

vi.mock("@/lib/supabase/server", () => ({
  createSupabaseServerClient: vi.fn()
}));

vi.mock("@/data/roles", () => ({
  getRoleListings: vi.fn(() => [
    {
      id: 1,
      title: "Head of Talent",
      team: "People",
      location: "Remote",
      type: "Full-time",
      summary: "Guide the recruiting experience."
    }
  ])
}));

const mockedCreateSupabaseServerClient = vi.mocked(createSupabaseServerClient);
const mockedGetRoleListings = vi.mocked(getRoleListings);

describe("fetchRoleListings", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("falls back to local listings when supabase is unavailable", async () => {
    mockedCreateSupabaseServerClient.mockReturnValue(null);

    const listings = await fetchRoleListings("en");

    expect(mockedGetRoleListings).toHaveBeenCalledWith("en");
    expect(listings).toHaveLength(1);
  });

  it("returns supabase data when available", async () => {
    const order = vi.fn().mockResolvedValue({
      data: [
        {
          id: 2,
          title: "Lead Recruiter",
          team: "People",
          location: "Berlin",
          type: "Full-time",
          summary: "Support global hiring."
        }
      ],
      error: null
    });
    const select = vi.fn(() => ({ order }));
    const from = vi.fn(() => ({ select }));
    const schema = vi.fn(() => ({ from }));

    mockedCreateSupabaseServerClient.mockReturnValue({ schema } as never);

    const listings = await fetchRoleListings("en");

    expect(schema).toHaveBeenCalledWith("public");
    expect(from).toHaveBeenCalledWith("role_listings_view");
    expect(select).toHaveBeenCalledWith("id,title,team,location,type,summary");
    expect(order).toHaveBeenCalledWith("id");
    expect(listings).toEqual([
      {
        id: 2,
        title: "Lead Recruiter",
        team: "People",
        location: "Berlin",
        type: "Full-time",
        summary: "Support global hiring."
      }
    ]);
  });

  it("falls back when supabase returns an error", async () => {
    const order = vi.fn().mockResolvedValue({
      data: null,
      error: new Error("Request failed")
    });
    const select = vi.fn(() => ({ order }));
    const from = vi.fn(() => ({ select }));
    const schema = vi.fn(() => ({ from }));

    mockedCreateSupabaseServerClient.mockReturnValue({ schema } as never);

    const listings = await fetchRoleListings("nl");

    expect(mockedGetRoleListings).toHaveBeenCalledWith("nl");
    expect(listings).toHaveLength(1);
  });
});
