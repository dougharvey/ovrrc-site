import type { ResultEvent } from "@/data/results";

export default function ResultsTable({ events }: { events: ResultEvent[] }) {
  if (events.length === 0) {
    return <p className="text-gray-500">No results recorded for this year.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="px-4 py-3">Event</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3" colSpan={2}>
              Results
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={`${e.event}-${i}`} className="border-t border-gray-200 align-top">
              <td className="px-4 py-3 font-medium">{e.event}</td>
              <td className="px-4 py-3 whitespace-nowrap">{e.date}</td>
              <td className="px-4 py-3" colSpan={2}>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {e.links.length === 0 && (
                    <span className="text-gray-400">—</span>
                  )}
                  {e.links.map((l, j) => (
                    <a
                      key={j}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-700 hover:underline"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
