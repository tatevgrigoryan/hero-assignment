import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { SearchInput } from "@/components/search-input";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { fetchHeroListings } from "@/lib/supabase/queries";
import type { Locale } from "@/lib/i18n";
import { getMessages, getSafeLocale } from "@/lib/i18n";

/**
 * Props for the jobs page.
 */
export type JobsPageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<{ q?: string | string[] }>;
};

/**
 * Hero jobs listing page.
 */
export default async function JobsPage({ params, searchParams }: JobsPageProps) {
  const { lang } = await params;
  const locale = getSafeLocale(lang as Locale);
  const messages = getMessages(locale);
  const listings = await fetchHeroListings(locale);
  const resolvedSearchParams = await searchParams;
  const query =
    typeof resolvedSearchParams?.q === "string" ? resolvedSearchParams.q.trim() : "";
  const filteredListings =
    query.length > 0
      ? listings.filter((listing) =>
          listing.title.toLowerCase().includes(query.toLowerCase())
        )
      : listings;
      const featuredTitle = filteredListings.length > 0 ? filteredListings[0]?.title : "";

  return (
    <div className="space-y-10" data-featured-title={featuredTitle}>

      <SectionHeading title={messages.jobs.title} subtitle={messages.jobs.subtitle} />
      <SearchInput initialQuery={query} />
      <div className="flex flex-wrap gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          {messages.jobs.filtersLabel}
        </span>
        {messages.jobs.filters.map((filter) => (
          <span key={filter} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
            {filter}
          </span>
        ))}
      </div>
      {filteredListings.length === 0 && (
        <div className="mt-6 pt-6 text-white">{messages.jobs.noResults}</div>
      )}
      <div className="grid gap-4">
        {filteredListings.map((listing, index) => (
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
                <Link href={`/${locale}/jobs/${listing.id}`}>{messages.home.heroCta}</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
