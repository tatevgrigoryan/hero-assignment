import * as React from "react";

import { Badge } from "../primitives/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../primitives/card";
import { cn } from "../../lib/cn";

export interface JobCardProps {
  title: string;
  department: string;
  location: string;
  employmentType: string;
  postedLabel: string;
  statusLabel?: string;
  salaryRange?: string | null;
  highlights?: string[];
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Recruitment-focused job card for role listings.
 */
export const JobCard = ({
  title,
  department,
  location,
  employmentType,
  postedLabel,
  statusLabel,
  salaryRange,
  highlights = [],
  actions,
  className
}: JobCardProps) => (
  <Card className={cn("space-y-4", className)}>
    <CardHeader>
      <div className="flex flex-wrap items-center gap-2">
        <Badge>{department}</Badge>
        <Badge variant="soft">{employmentType}</Badge>
        {statusLabel ? <Badge variant="solid">{statusLabel}</Badge> : null}
      </div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {location} · {postedLabel}
      </CardDescription>
    </CardHeader>
    <CardContent>
      {salaryRange ? (
        <p className="text-sm text-slate-700">Compensation: {salaryRange}</p>
      ) : null}
      {highlights.length > 0 ? (
        <ul className="list-disc space-y-1 pl-4 text-sm text-slate-600">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </CardContent>
    {actions ? <CardFooter className="justify-between">{actions}</CardFooter> : null}
  </Card>
);
