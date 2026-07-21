import AngledButton from "@/components/AngledButton";
import { CURRENT_YEAR, getCurrentYearEvents } from "@/data/results";

const SCHEDULE = [
  {
    date: "2/28/26",
    event: "Poor Man's Run",
    href: "https://runsignup.com/Race/LA/Monroe/StVincentDePaulCommunityPharmacyPoorManSRun",
    city: "Monroe",
    state: "LA",
  },
];

export default function Home() {
  const nextRace = SCHEDULE[0];
  const recentResults = getCurrentYearEvents();

  return (
    <div>
      {/* Hero */}
      <section className="relative left-1/2 -translate-x-1/2 w-screen -mt-8 mb-12 bg-gradient-to-br from-gray-950 via-gray-900 to-red-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <p className="text-red-500 font-bold uppercase tracking-[0.2em] mb-3">
            Since 1979
          </p>
          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4">
            Ouachita Valley
            <br />
            Road Runners
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Promoting road races, fun runs, and healthy running in Monroe,
            West Monroe, and the Ouachita Valley since 1979.
          </p>

          {nextRace && (
            <div className="inline-block bg-white text-gray-900 rounded-lg shadow-2xl px-8 py-6 text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-1">
                Up Next
              </p>
              <p className="text-2xl font-black">{nextRace.event}</p>
              <p className="text-gray-600 mb-4">
                {nextRace.date} &middot; {nextRace.city}, {nextRace.state}
              </p>
              <AngledButton href={nextRace.href} external>
                Register Now
              </AngledButton>
            </div>
          )}
        </div>
      </section>

      {/* Recent results */}
      {recentResults.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900">
              {CURRENT_YEAR} Results
            </h2>
            <a
              href="/results"
              className="text-red-700 font-bold uppercase text-sm tracking-wide hover:underline"
            >
              Full Archive &rarr;
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {recentResults.map((e, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-5 hover:border-red-300 hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-1">
                  {e.date}
                </p>
                <p className="text-lg font-bold text-gray-900 mb-3">
                  {e.event}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {e.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 font-semibold hover:underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quick links */}
      <section className="grid sm:grid-cols-3 gap-4 mb-8">
        <QuickLink
          title="Results Archive"
          desc="Browse race results all the way back to 2005."
          href="/results"
        />
        <QuickLink
          title="Running Groups"
          desc="Find a group run near you, any day of the week."
          href="/running-groups"
        />
        <QuickLink
          title="Photos"
          desc="Relive past races through our photo galleries."
          href="/photos"
        />
      </section>
    </div>
  );
}

function QuickLink({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-red-50 hover:border-red-200 transition-colors"
    >
      <p className="font-black uppercase tracking-tight text-gray-900 mb-1">
        {title}
      </p>
      <p className="text-sm text-gray-600">{desc}</p>
    </a>
  );
}
