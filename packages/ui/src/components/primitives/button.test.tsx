import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Button } from "./button";

describe("Button", () => {
  it("renders default button styles", () => {
    const markup = renderToStaticMarkup(<Button>Apply</Button>);
    expect(markup).toContain("rounded-full");
    expect(markup).toContain("Apply");
  });

  it("renders ghost variant", () => {
    const markup = renderToStaticMarkup(
      <Button variant="ghost" size="sm">
        Details
      </Button>
    );
    expect(markup).toContain("bg-transparent");
    expect(markup).toContain("Details");
  });
});
