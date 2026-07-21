type Row = {
  day: string;
  time: string;
  location?: string;
  distance: string;
};

export default function GroupScheduleTable({ rows }: { rows: Row[] }) {
  const hasLocation = rows.some((r) => r.location);
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 mb-4">
      <table className="w-full text-left">
        <thead className="bg-gray-100 text-sm text-gray-600">
          <tr>
            <th className="px-4 py-2">Day</th>
            <th className="px-4 py-2">Start Time</th>
            {hasLocation && <th className="px-4 py-2">Location</th>}
            <th className="px-4 py-2">Distance</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-gray-200">
              <td className="px-4 py-2">{r.day}</td>
              <td className="px-4 py-2">{r.time}</td>
              {hasLocation && <td className="px-4 py-2">{r.location}</td>}
              <td className="px-4 py-2">{r.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
