# @bluehero/lib

Typed domain models, Supabase query wrappers, and shared utilities for BlueHero applications.

## Exports

### Models
- `ApplicationInput`
- `ApplicationResult`
- `CandidatePipelineSummary`
- `EmploymentType`
- `JobDetail`
- `JobListing`
- `JobStatus`
- `WithdrawalResult`

### Constants
- `CANDIDATE_PIPELINE_VIEW`
- `JOB_DETAIL_VIEW`
- `JOB_LISTINGS_VIEW`
- `RECRUITMENT_SCHEMA`
- `SUBMIT_APPLICATION_FUNCTION`
- `WITHDRAW_APPLICATION_FUNCTION`

### Queries
- `fetchJobListings`
- `fetchJobDetailBySlug`
- `submitApplication`
- `withdrawApplication`
- `JobListingFilters`

### Utilities
- `formatCurrencyRange`
- `formatLocation`
- `formatRelativeDate`
- `isNonEmptyString`
- `buildPaginationRange`
- `unwrapSupabaseResult`
- `SupabaseErrorShape`
- `SupabaseResponse`
