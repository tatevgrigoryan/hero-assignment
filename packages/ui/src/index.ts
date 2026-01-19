/**
 * @bluehero/ui exports ShadCN-inspired primitives and recruitment UI components.
 */

export { cn } from "./lib/cn";

export type { BadgeProps, BadgeVariant } from "./components/primitives/badge";
export { Badge } from "./components/primitives/badge";

export type { ButtonProps, ButtonSize, ButtonVariant } from "./components/primitives/button";
export { Button } from "./components/primitives/button";

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "./components/primitives/card";

export { Input } from "./components/primitives/input";
export { Skeleton } from "./components/primitives/skeleton";
export { Textarea } from "./components/primitives/textarea";

export type { JobCardProps } from "./components/recruitment/job-card";
export { JobCard } from "./components/recruitment/job-card";

export type { RecruitmentErrorStateProps } from "./components/recruitment/error-state";
export { RecruitmentErrorState } from "./components/recruitment/error-state";

export type { RecruitmentLoadingStateProps } from "./components/recruitment/loading-state";
export { RecruitmentLoadingState } from "./components/recruitment/loading-state";

export type { PipelineSummaryProps } from "./components/recruitment/pipeline-summary";
export { PipelineSummary } from "./components/recruitment/pipeline-summary";

export type { MotionSurfaceProps } from "./components/recruitment/motion-surface";
export { MotionSurface } from "./components/recruitment/motion-surface";
