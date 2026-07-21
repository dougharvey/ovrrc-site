import { notFound } from "next/navigation";
import ResultsTable from "@/components/ResultsTable";
import { ARCHIVE_YEARS, getEventsForYear } from "@/data/results";

export function generateStaticParams() {
  return ARCHIVE_YEARS.map((year) => ({ year: String(year) }));
}

export default async function YearResultsPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const yearNum = Number(year);

  if (!ARCHIVE_YEARS.includes(yearNum)) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {yearNum} Results
      </h1>
      <ResultsTable events={getEventsForYear(yearNum)} />
    </div>
  );
}
