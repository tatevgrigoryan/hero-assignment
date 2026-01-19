/**
 * Domain models for recruitment workflows.
 */

export type EmploymentType = "full-time" | "part-time" | "contract" | "intern";

export type JobStatus = "open" | "paused" | "closed";

export interface JobListing {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employmentType: EmploymentType;
  salaryRange: string | null;
  postedAt: string;
  status: JobStatus;
  highlights: string[];
}

export interface JobDetail extends JobListing {
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

export interface CandidatePipelineSummary {
  jobId: string;
  jobTitle: string;
  stageCounts: Record<string, number>;
  totalCandidates: number;
  lastUpdatedAt: string;
}

export interface ApplicationInput {
  jobId: string;
  fullName: string;
  email: string;
  resumeUrl: string;
  portfolioUrl?: string | null;
  coverLetter?: string | null;
}

export interface ApplicationResult {
  applicationId: string;
  status: "received" | "screening" | "interview" | "offer" | "hired" | "rejected";
  submittedAt: string;
}

export interface WithdrawalResult {
  applicationId: string;
  status: "withdrawn";
  withdrawnAt: string;
}
