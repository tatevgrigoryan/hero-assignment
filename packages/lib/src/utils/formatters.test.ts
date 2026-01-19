import { describe, expect, it } from "vitest";

import { formatCurrencyRange, formatLocation, formatRelativeDate } from "./formatters";

describe("formatters", () => {
  it("formats currency ranges", () => {
    expect(formatCurrencyRange(120000, 140000)).toBe("$120,000 - $140,000");
  });

  it("formats locations", () => {
    expect(formatLocation("Austin")).toBe("Austin");
    expect(formatLocation("Austin", "TX")).toBe("Austin, TX");
  });

  it("formats relative dates", () => {
    const now = new Date("2024-01-10T00:00:00.000Z");
    expect(formatRelativeDate("2024-01-10T00:00:00.000Z", now)).toBe("Today");
    expect(formatRelativeDate("2024-01-09T00:00:00.000Z", now)).toBe("1 day ago");
    expect(formatRelativeDate("2024-01-05T00:00:00.000Z", now)).toBe("5 days ago");
  });
});
