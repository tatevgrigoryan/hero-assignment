import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { MotionSurface } from "./motion-surface";
import { PipelineSummary } from "./pipeline-summary";
import { RecruitmentErrorState } from "./error-state";
import { RecruitmentLoadingState } from "./loading-state";

describe("recruitment states", () => {
  it("renders loading state", () => {
    const markup = renderToStaticMarkup(<RecruitmentLoadingState />);
    expect(markup).toContain("Loading roles");
  });

  it("renders error state", () => {
    const markup = renderToStaticMarkup(
      <RecruitmentErrorState description="Please retry" />
    );
    expect(markup).toContain("Something went wrong");
    expect(markup).toContain("Please retry");
  });

  it("renders pipeline summary", () => {
    const markup = renderToStaticMarkup(
      <PipelineSummary
        jobTitle="Product Designer"
        totalCandidates={12}
        stageCounts={{ Screening: 5, Interview: 3 }}
        updatedLabel="today"
      />
    );

    expect(markup).toContain("Product Designer");
    expect(markup).toContain("12 candidates");
  });

  it("wraps content with motion surface", () => {
    const markup = renderToStaticMarkup(
      <MotionSurface>
        <div>Hover me</div>
      </MotionSurface>
    );

    expect(markup).toContain("Hover me");
  });
});
