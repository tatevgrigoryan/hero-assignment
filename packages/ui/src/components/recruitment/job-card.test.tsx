import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { JobCard } from "./job-card";

describe("JobCard", () => {
  it("renders job details", () => {
    const markup = renderToStaticMarkup(
      <JobCard
        title="Senior UX Designer"
        department="Design"
        location="Remote"
        employmentType="Full-time"
        postedLabel="2 days ago"
        salaryRange="$120k - $140k"
        highlights={["Crafted premium UI", "Partnered with product"]}
      />
    );

    expect(markup).toContain("Senior UX Designer");
    expect(markup).toContain("Design");
    expect(markup).toContain("Crafted premium UI");
  });
});
