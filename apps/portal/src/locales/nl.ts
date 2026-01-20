/**
 * Dutch copy for the portal app.
 */
export const nl = {
  languageLabel: "Nederlands",
  nav: {
    brand: "Hero Portaal",
    primaryLinks: [
      { href: "/nl", label: "Hero vacatures" },
      { href: "/nl/jobs", label: "Toprollen" },
      { href: "/nl/employer", label: "Werkgever hub" }
    ],
    cta: "Start je match"
  },
  footer: {
    title: "Talentconstellatie",
    description: "We koppelen hero-carrières aan missiegedreven teams.",
    secondary: "Gemaakt voor transparante werving."
  },
  home: {
    heroTitle: "Ontdek rollen met hero-impact",
    heroSubtitle: "Geselecteerde missies met duidelijke tijdlijnen.",
    heroCta: "Bekijk open missies",
    heroTag: "Vertrouwd door mission operators",
    heroListingsTitle: "Prioritaire hero vacatures",
    heroListingsSubtitle: "Rollen met heldere scope en groei.",
    highlightTitle: "Waarom heroes dit portaal kiezen",
    highlightSubtitle: "Werving met focus op duidelijkheid en zorg.",
    stats: [
      { label: "Actieve missies", value: "124" },
      { label: "Hiring squads", value: "42" },
      { label: "Gem. time-to-match", value: "12 dagen" }
    ],
    highlights: [
      {
        title: "Heldere missiebriefings",
        description: "Gestructureerde rolbriefings en outcomes voor interviews."
      },
      {
        title: "Transparante beloning",
        description: "Publicatie van salarisschalen en groeipaden."
      },
      {
        title: "Begeleide onboarding",
        description: "Recruiters coördineren elke startstap."
      }
    ]
  },
  jobs: {
    title: "Uitgelichte hero rollen",
    subtitle: "Directe impactrollen afgestemd op jouw expertise.",
    filtersLabel: "Rol focus",
    filters: ["Leiderschap", "Operations", "Engineering", "Design"],
    noResults: "Sorry, we hebben geen vacatures gevonden die overeenkomen met je zoekopdracht.",
    listings: [
      {
        id: "mission-aurora",
        title: "Mission Strategy Lead",
        team: "Aurora Defense",
        location: "Amsterdam, NL",
        type: "Hybride",
        summary: "Leid missiplanning en team readiness."
      },
      {
        id: "signal-nova",
        title: "Signal Platform Engineer",
        team: "Nova Orbit",
        location: "Remote",
        type: "Remote",
        summary: "Bouw veilige communicatie voor hero teams."
      },
      {
        id: "atlas-ops",
        title: "Operations Captain",
        team: "Atlas Response",
        location: "Utrecht, NL",
        type: "On-site",
        summary: "Coördineer veldlogistiek en escalaties."
      }
    ]
  },
  jobDetail: {
    title: "Rolbrief",
    sections: {
      mission: "Missie",
      outcomes: "Belangrijkste outcomes",
      traits: "Ideaal hero profiel"
    },
    actions: {
      primary: "Vraag introductie",
      secondary: "Deel rol"
    },
    outcomes: [
      "Start missie binnen 30 dagen",
      "Stel wekelijkse alignment rituelen op",
      "Lever eerste missie debrief"
    ],
    traits: [
      "Missie-first mindset",
      "Heldere teamcommunicatie",
      "Comfortabel met escalatie"
    ]
  },
  employer: {
    title: "Werkgever command center",
    subtitle: "Volg hiring missies en hero readiness centraal.",
    pipelineTitle: "Missiepijplijn",
    pipelineSubtitle: "Realtime status van hero onboarding.",
    pipeline: [
      { stage: "Gesourced", value: "28" },
      { stage: "Gescreend", value: "14" },
      { stage: "Final briefing", value: "5" }
    ],
    actions: {
      primary: "Publiceer nieuwe missie",
      secondary: "Bekijk shortlist"
    }
  },
  loading: {
    title: "Missiedata synchroniseren",
    subtitle: "Hero-informatie wordt geladen."
  },
  error: {
    title: "Storing in mission control",
    subtitle: "We konden dit scherm niet laden. Probeer opnieuw.",
    action: "Probeer opnieuw"
  },
  notFound: {
    title: "Signaal verloren",
    subtitle: "Deze missie-route bestaat niet.",
    action: "Terug naar start"
  }
} as const;
