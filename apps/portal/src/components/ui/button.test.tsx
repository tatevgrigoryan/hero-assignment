import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders with default styling", () => {
    render(<Button>Apply now</Button>);

    const button = screen.getByRole("button", { name: "Apply now" });

    expect(button).toHaveClass("bg-white");
  });
});
