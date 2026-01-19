import * as React from "react";

import { Card, CardContent, CardHeader } from "../primitives/card";
import { Skeleton } from "../primitives/skeleton";
import { cn } from "../../lib/cn";

export interface RecruitmentLoadingStateProps {
  title?: string;
  className?: string;
}

/**
 * Loading state for recruitment surfaces.
 */
export const RecruitmentLoadingState = ({
  title = "Loading roles",
  className
}: RecruitmentLoadingStateProps) => (
  <Card className={cn("space-y-4", className)}>
    <CardHeader>
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-6 w-2/3" />
    </CardHeader>
    <CardContent className="space-y-3">
      <p className="text-sm text-slate-500">{title}</p>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </CardContent>
  </Card>
);
