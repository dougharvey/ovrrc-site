import AngledButton from "@/components/AngledButton";
import ResultsTable from "@/components/ResultsTable";
import { ARCHIVE_YEARS, CURRENT_YEAR, getCurrentYearEvents } from "@/data/results";

export default function ResultsPage() {
  const currentEvents = getCurrentYearEvents();
  const years = [...ARCHIVE_YEARS].sort((a, b) => b - a);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {CURRENT_YEAR} Results
        </h1>
        <ResultsTable events={currentEvents} />
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Previous Years Results
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
          {years.map((year) => (
            <AngledButton
              key={year}
              href={`/results/${year}`}
              variant="bordered"
              size="sm"
              className="w-full"
            >
              {year}
            </AngledButton>
          ))}
        </div>
      </div>
    </div>
  );
}
