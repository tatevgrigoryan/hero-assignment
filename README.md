# Hero Assignment Monorepo

This repository is a monorepo for the Hero assessment. It uses **Next.js (latest)** with **React 18+**, **TypeScript**, and **Supabase**, and follows a server-first approach (SSR/RSC) with no client-side DB calls. Data access is routed through Supabase **custom schemas**, **public views** for reads, and **public functions** for writes with **RLS** enabled.

## Repository Structure

- `apps/` — Application(s) (Next.js).
- `packages/` — Shared packages/components/utilities.
- `supabase/` — Supabase config, migrations, and function definitions.
- `tests/` — Cross-cutting test assets and helpers.

## Setup

### Prerequisites

- Node.js (latest LTS)
- pnpm
- Supabase CLI (optional for local DB work)

### Install

```bash
pnpm install
```

### Run the app

```bash
pnpm dev
```

### Lint & typecheck

```bash
pnpm lint
pnpm typecheck
```

### Required command

```bash
turbo run build test lint
```

### Tests

```bash
pnpm test
```

> Notes
> - Prefer SSR/RSC for data processing; avoid client-side DB calls.
> - Use feature-based structure and follow SOLID/DRY.
> - Security practices should align with OWASP Top 10.
> - UI uses TailwindCSS + ShadCN UI + Framer Motion for a minimal, Apple Liquid Glass-inspired design (light, tactile, elegant, accessible; WCAG 2.1 AA). Keep motion subtle (≤400 ms) and only when it improves UX.

---

# Assessment Tasks

Each task should include: **clear acceptance criteria**, **performance goals**, **UX consistency notes**, and **required tests**.

## 1) Easy — Fix a Small UI/Logic Bug (Recruitment Listing Page)

### Scope
Fix a small UI or logic issue on the recruitment listing page (e.g., incorrect state display, broken filter, missing empty state, or count mismatch).

### Acceptance Criteria
- The bug is reproducible before the fix and no longer occurs after.
- The recruitment listing page displays correct content for all relevant states (loading, empty, error, populated).
- SSR/RSC is used for data processing; no client-side DB calls.
- Any affected copy or labels are updated to match the intended UX.

### Performance Goals
- No regression in Time-to-First-Byte (TTFB) or SSR render time.
- Avoid unnecessary client re-renders; no new client-side data fetching.

### UX Consistency Notes
- Align typography, spacing, and UI primitives with existing design system.
- Maintain Apple Liquid Glass-inspired aesthetic; no heavy animations.
- Provide clear, accessible empty/error states (WCAG 2.1 AA).

### Required Tests
- Unit tests covering the bug fix and state logic.
- Snapshot or DOM tests for the recruitment listing states.
- Ensure ≥80% coverage in the impacted module.

---

## 2) Medium — Refactor to a Reusable Component Module

### Scope
Refactor a shared section (e.g., listing cards) into a reusable, documented component module with typed props and server-first rendering.

### Acceptance Criteria
- Shared UI logic is extracted into a reusable component/module.
- All exports are documented with clear usage guidance.
- Props are typed and validated; server-first usage is preserved.
- Existing consumers are updated with no visual regressions.

### Performance Goals
- Reduced duplicate rendering logic with no added bundle bloat.
- Avoid unnecessary client boundaries; default to RSC.

### UX Consistency Notes
- Component conforms to ShadCN UI and Tailwind conventions.
- Maintain consistent spacing, typography, and glass-like surfaces.
- Subtle motion (≤400 ms) only if it improves feedback/clarity.

### Required Tests
- Unit tests for the new component (props, edge cases, rendering).
- Regression tests for any updated pages/sections.
- Coverage ≥80% for the refactored module.

---

## 3) Hard — New Feature Behind a Feature Flag

### Scope
Add a new feature (e.g., candidate application flow) behind a **feature flag**. Must be server-first, use Supabase public views/functions, and follow RLS.

### Acceptance Criteria
- Feature is gated by a flag (config/env-driven) and disabled by default.
- End-to-end flow works when enabled (e.g., browse listing → apply → confirmation).
- Server actions or API routes use Supabase public functions for writes.
- All UI states are handled (loading, success, error) with clear messaging.
- No client-side DB calls; all data access is SSR/RSC or server actions.

### Performance Goals
- Maintain SSR performance; avoid heavy client hydration.
- Minimize round trips and keep server actions efficient.
- No new long tasks or >400 ms UI animations.

### UX Consistency Notes
- UI matches existing design system and Liquid Glass visual language.
- Form validation is accessible and clear (WCAG 2.1 AA).
- Motion is subtle and purposeful (≤400 ms).

### Required Tests
- Unit tests for feature-flag logic and server actions.
- Integration tests for the application flow (flag on/off).
- Security tests/validation for Supabase function inputs.
- Coverage ≥80% for new feature modules.

---

## Contribution Notes

- Use Conventional Commits.
- No direct merges to `main`.
- Provide visual QA for UI PRs.
