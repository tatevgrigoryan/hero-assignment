import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges classes and resolves conflicts", () => {
    expect(cn("text-white", "text-black")).toBe("text-black");
  });
});
