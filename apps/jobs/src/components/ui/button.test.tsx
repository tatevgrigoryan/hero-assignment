import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders with ghost styling", () => {
    render(<Button variant="ghost">View roles</Button>);

    const button = screen.getByRole("button", { name: "View roles" });

    expect(button).toHaveClass("border");
  });
});
