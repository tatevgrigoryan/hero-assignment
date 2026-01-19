import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../primitives/card";
import { cn } from "../../lib/cn";

export interface RecruitmentErrorStateProps {
  title?: string;
  description: string;
  className?: string;
  action?: React.ReactNode;
}

/**
 * Error state card for recruitment surfaces.
 */
export const RecruitmentErrorState = ({
  title = "Something went wrong",
  description,
  className,
  action
}: RecruitmentErrorStateProps) => (
  <Card className={cn("space-y-4 border-rose-100 bg-rose-50/60", className)}>
    <CardHeader>
      <CardTitle className="text-rose-900">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-rose-700">{description}</p>
      {action}
    </CardContent>
  </Card>
);
