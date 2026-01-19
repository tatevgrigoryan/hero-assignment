import * as React from "react";

import { Badge } from "../primitives/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { cn } from "../../lib/cn";

export interface PipelineSummaryProps {
  jobTitle: string;
  totalCandidates: number;
  stageCounts: Record<string, number>;
  updatedLabel: string;
  className?: string;
}

/**
 * Snapshot card for candidate pipeline metrics.
 */
export const PipelineSummary = ({
  jobTitle,
  totalCandidates,
  stageCounts,
  updatedLabel,
  className
}: PipelineSummaryProps) => (
  <Card className={cn("space-y-4", className)}>
    <CardHeader>
      <Badge variant="soft">Pipeline</Badge>
      <CardTitle>{jobTitle}</CardTitle>
      <p className="text-sm text-slate-500">Updated {updatedLabel}</p>
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-3xl font-semibold text-slate-900">{totalCandidates} candidates</p>
      <div className="flex flex-wrap gap-2">
        {Object.entries(stageCounts).map(([stage, count]) => (
          <Badge key={stage}>{stage}: {count}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);
