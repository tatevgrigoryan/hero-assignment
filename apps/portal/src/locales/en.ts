/**
 * English copy for the portal app.
 */
export const en = {
  languageLabel: "English",
  nav: {
    brand: "Hero Portal",
    primaryLinks: [
      { href: "/en", label: "Hero listings" },
      { href: "/en/jobs", label: "Featured roles" },
      { href: "/en/employer", label: "Employer hub" }
    ],
    cta: "Start your match"
  },
  footer: {
    title: "Talent constellation",
    description: "Aligning heroic careers with mission-driven teams.",
    secondary: "Crafted with trust-centric hiring."
  },
  home: {
    heroTitle: "Discover roles built for hero impact",
    heroSubtitle: "Curated mission-critical openings with transparent timelines.",
    heroCta: "Explore open missions",
    heroTag: "Trusted by mission operators",
    heroListingsTitle: "Priority hero listings",
    heroListingsSubtitle: "Roles vetted for clarity, growth, and mission scope.",
    highlightTitle: "Why heroes choose this portal",
    highlightSubtitle: "Recruitment experiences shaped around clarity and care.",
    stats: [
      { label: "Active missions", value: "124" },
      { label: "Hiring squads", value: "42" },
      { label: "Avg. time-to-match", value: "12 days" }
    ],
    highlights: [
      {
        title: "Clear mission briefs",
        description: "Structured role briefs and outcomes before interviews."
      },
      {
        title: "Transparent compensation",
        description: "Published salary bands and growth paths for every opening."
      },
      {
        title: "Guided onboarding",
        description: "Partnered recruiters coordinate every launch step."
      }
    ]
  },
  jobs: {
    title: "Featured hero roles",
    subtitle: "Immediate-impact roles aligned with your specialty.",
    filtersLabel: "Role focus",
    filters: ["Leadership", "Operations", "Engineering", "Design"],
    noResults: "Sorry, we couldn’t find any listings matching your search.",
    listings: [
      {
        id: "mission-aurora",
        title: "Mission Strategy Lead",
        team: "Aurora Defense",
        location: "Amsterdam, NL",
        type: "Hybrid",
        summary: "Direct multi-team mission planning and field readiness."
      },
      {
        id: "signal-nova",
        title: "Signal Platform Engineer",
        team: "Nova Orbit",
        location: "Remote",
        type: "Remote",
        summary: "Build secure comms infrastructure for hero teams."
      },
      {
        id: "atlas-ops",
        title: "Operations Captain",
        team: "Atlas Response",
        location: "Utrecht, NL",
        type: "On-site",
        summary: "Coordinate field logistics and escalation flows."
      }
    ]
  },
  jobDetail: {
    title: "Role brief",
    sections: {
      mission: "Mission",
      outcomes: "Key outcomes",
      traits: "Ideal hero profile"
    },
    actions: {
      primary: "Request intro",
      secondary: "Share role"
    },
    outcomes: [
      "Launch mission within 30 days",
      "Establish weekly alignment rituals",
      "Deliver first mission debrief"
    ],
    traits: [
      "Mission-first mindset",
      "Clear cross-team communication",
      "Comfort with rapid escalation"
    ]
  },
  employer: {
    title: "Employer command center",
    subtitle: "Monitor hiring missions and hero readiness in one place.",
    pipelineTitle: "Mission pipeline",
    pipelineSubtitle: "Real-time status of hero onboarding.",
    pipeline: [
      { stage: "Sourced", value: "28" },
      { stage: "Screened", value: "14" },
      { stage: "Final briefing", value: "5" }
    ],
    actions: {
      primary: "Publish new mission",
      secondary: "Review shortlisted heroes"
    }
  },
  loading: {
    title: "Synchronizing mission data",
    subtitle: "Refreshing hero intel for you."
  },
  error: {
    title: "Mission control disruption",
    subtitle: "We could not load this view. Please retry.",
    action: "Retry"
  },
  notFound: {
    title: "Signal lost",
    subtitle: "This mission route could not be found.",
    action: "Return home"
  }
} as const;
