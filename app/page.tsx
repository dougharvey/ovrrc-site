const SCHEDULE = [
  {
    date: "2/28/26",
    event: "Poor Man's Run",
    href: "https://runsignup.com/Race/LA/Monroe/StVincentDePaulCommunityPharmacyPoorManSRun",
    address: "Monroe",
    city: "Monroe",
    state: "LA",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">OVRRC Events</h1>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">Street Address</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">State</th>
            </tr>
          </thead>
          <tbody>
            {SCHEDULE.map((row) => (
              <tr key={row.event} className="border-t border-gray-200">
                <td className="px-4 py-3">{row.date}</td>
                <td className="px-4 py-3">
                  <a
                    href={row.href}
                    className="text-red-700 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.event}
                  </a>
                </td>
                <td className="px-4 py-3">{row.address}</td>
                <td className="px-4 py-3">{row.city}</td>
                <td className="px-4 py-3">{row.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
