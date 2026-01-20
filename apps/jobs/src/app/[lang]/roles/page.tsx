import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { en } from "@/locales/en";
import { nl } from "@/locales/nl";

/**
 * Props for the roles page.
 */
export type RolesPageProps = {
  params: Promise<{ lang: string }>;
};

/**
 * Roles listing page.
 */
export default async function RolesPage({ params }: RolesPageProps) {
  const locales = ["en", "nl"] as const;
  type Locale = (typeof locales)[number];
  type RoleListing = {
    id: string;
    title: string;
    team: string;
    location: string;
    type: string;
    summary: string;
  };
  const messages = {
    en,
    nl
  } satisfies Record<Locale, Record<string, unknown>>;
  const { lang } = await params;
  const locale =
    lang && locales.includes(lang as Locale) ? (lang as Locale) : "en";
  const messagesForLocale = messages[locale];
  const fallbackListings =
    messagesForLocale.roles.listings as unknown as RoleListing[];
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  const supabase =
    url && key
      ? createClient(url, key, {
          auth: {
            persistSession: false
          }
        })
      : null;
  const listings = supabase
    ? await (async () => {
        const { data, error } = await supabase
          .schema("public")
          .from("role_listings_view")
          .select("id,title,team,location,type,summary")
          .order("id");
        if (error || !data) {
          return fallbackListings;
        }
        return data;
      })()
    : fallbackListings;

  return (
    <div className="space-y-10">
      <SectionHeading
        title={messagesForLocale.roles.title}
        subtitle={messagesForLocale.roles.subtitle}
      />
      <div className="flex flex-wrap gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          {messages.roles.filtersLabel}
        </span>
        {messagesForLocale.roles.filters.map((filter) => (
          <span key={filter} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            {filter}
          </span>
        ))}
      </div>
      <div className="grid gap-4">
        {listings.map((listing, index) => (
          <FadeIn key={listing.id} delay={0.05 + index * 0.05}>
            <div className="glass-panel flex flex-col gap-4 rounded-3xl p-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">{listing.team}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{listing.title}</h3>
                  <p className="text-sm text-white/70">{listing.summary}</p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-white/70">
                  <span className="rounded-full border border-white/20 px-3 py-1">{listing.location}</span>
                  <span className="rounded-full border border-white/20 px-3 py-1">{listing.type}</span>
                </div>
              </div>
              <Button asChild>
                <Link href={`/${locale}/roles/${listing.id}`}>{messagesForLocale.home.heroCta}</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
