import AngledButton from "@/components/AngledButton";
import { SCHEDULE } from "@/data/schedule";

export const metadata = {
  title: "Schedule – Ouachita Valley Road Runners",
};

export default function SchedulePage() {
  return (
    <div>
      <h1 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-6">
        OVRRC Schedule
      </h1>

      {SCHEDULE.length === 0 ? (
        <p className="text-gray-600">
          No upcoming races are scheduled right now — check back soon.
        </p>
      ) : (
        <div className="space-y-4">
          {SCHEDULE.map((race, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-red-300 hover:shadow-md transition-all"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-red-700 mb-1">
                  {race.date}
                </p>
                <p className="text-xl font-black text-gray-900">
                  {race.event}
                </p>
                <p className="text-gray-600">
                  {[race.address, race.city, race.state]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
              <AngledButton href={race.href} external size="sm">
                Register Now
              </AngledButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
