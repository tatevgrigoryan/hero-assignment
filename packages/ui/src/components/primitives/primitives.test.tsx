import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Skeleton } from "./skeleton";
import { Textarea } from "./textarea";

describe("primitives", () => {
  it("renders badge variants", () => {
    const markup = renderToStaticMarkup(<Badge variant="solid">New</Badge>);
    expect(markup).toContain("New");
    expect(markup).toContain("bg-slate-900");
  });

  it("renders card sections", () => {
    const markup = renderToStaticMarkup(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    );

    expect(markup).toContain("Title");
    expect(markup).toContain("Content");
  });

  it("renders input, textarea, and skeleton", () => {
    const markup = renderToStaticMarkup(
      <div>
        <Input placeholder="Email" />
        <Textarea placeholder="Message" />
        <Skeleton className="h-4 w-4" />
      </div>
    );

    expect(markup).toContain("placeholder=\"Email\"");
    expect(markup).toContain("placeholder=\"Message\"");
    expect(markup).toContain("animate-pulse");
  });
});
