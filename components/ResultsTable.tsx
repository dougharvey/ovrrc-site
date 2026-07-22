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
            <th className="px-4 py-3">Results</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={`${e.event}-${i}`} className="border-t border-gray-200 align-top">
              <td className="px-4 py-3 font-medium">{e.event}</td>
              <td className="px-4 py-3 whitespace-nowrap">{e.date}</td>
              <td className="px-4 py-3">
                {e.links[0] ? (
                  <a
                    href={e.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                  >
                    {e.links[0].label}
                  </a>
                ) : (
                  <span className="text-gray-400">—</span>
                )}
              </td>
              <td className="px-4 py-3">
                {e.links[1] && (
                  <a
                    href={e.links[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 hover:underline"
                  >
                    {e.links[1].label}
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
