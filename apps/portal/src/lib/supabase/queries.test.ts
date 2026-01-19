import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchHeroListings } from "@/lib/supabase/queries";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { getHeroListings } from "@/data/hero";

vi.mock("@/lib/supabase/server", () => ({
  createSupabaseServerClient: vi.fn()
}));

vi.mock("@/data/hero", () => ({
  getHeroListings: vi.fn(() => [
    {
      id: 1,
      title: "Hero Designer",
      team: "Design",
      location: "Remote",
      type: "Full-time",
      summary: "Build radiant experiences."
    }
  ])
}));

const mockedCreateSupabaseServerClient = vi.mocked(createSupabaseServerClient);
const mockedGetHeroListings = vi.mocked(getHeroListings);

describe("fetchHeroListings", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("falls back to local listings when supabase is unavailable", async () => {
    mockedCreateSupabaseServerClient.mockReturnValue(null);

    const listings = await fetchHeroListings("en");

    expect(mockedGetHeroListings).toHaveBeenCalledWith("en");
    expect(listings).toHaveLength(1);
  });

  it("returns supabase data when available", async () => {
    const order = vi.fn().mockResolvedValue({
      data: [
        {
          id: 2,
          title: "Hero Engineer",
          team: "Engineering",
          location: "Amsterdam",
          type: "Full-time",
          summary: "Ship reliable platforms."
        }
      ],
      error: null
    });
    const select = vi.fn(() => ({ order }));
    const from = vi.fn(() => ({ select }));
    const schema = vi.fn(() => ({ from }));

    mockedCreateSupabaseServerClient.mockReturnValue({ schema } as never);

    const listings = await fetchHeroListings("en");

    expect(schema).toHaveBeenCalledWith("public");
    expect(from).toHaveBeenCalledWith("hero_listings_view");
    expect(select).toHaveBeenCalledWith("id,title,team,location,type,summary");
    expect(order).toHaveBeenCalledWith("id");
    expect(listings).toEqual([
      {
        id: 2,
        title: "Hero Engineer",
        team: "Engineering",
        location: "Amsterdam",
        type: "Full-time",
        summary: "Ship reliable platforms."
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

    const listings = await fetchHeroListings("nl");

    expect(mockedGetHeroListings).toHaveBeenCalledWith("nl");
    expect(listings).toHaveLength(1);
  });
});
