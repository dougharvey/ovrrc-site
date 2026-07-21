import GroupScheduleTable from "@/components/GroupScheduleTable";

export default function RunningGroupsPage() {
  return (
    <div className="space-y-10">
      <h1 className="text-2xl font-bold text-gray-900">Running Groups</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Crazy Runners</h2>
        <p className="mb-4">
          Contact: Jimmy Snow via e-mail at{" "}
          <a className="text-red-700 hover:underline" href="mailto:jasnowjr@bellsouth.net">
            jasnowjr@bellsouth.net
          </a>
          .
        </p>
        <GroupScheduleTable
          rows={[
            { day: "Monday", time: "5:00 AM", location: "IHOP, West Monroe", distance: "5.5 miles" },
            { day: "Wednesday", time: "5:00 AM", location: "Family Church", distance: "6 miles" },
            { day: "Thursday", time: "5:00 AM", location: "Ike Hamilton Expo Center", distance: "4.5 – 5 miles" },
            { day: "Saturday", time: "Varies", location: "Varies", distance: "8-22 miles" },
          ]}
        />
        <p>
          More information can be found in their{" "}
          <a
            className="text-red-700 hover:underline"
            href="https://www.facebook.com/groups/133324340071298/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook group
          </a>
          !
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Monroe Athletic Club Running Group
        </h2>
        <p className="mb-3">
          We run at 5:30 a.m. on Tuesdays and Thursdays, and 7:00 AM on
          Saturdays and Sundays from the MAC (Monroe Athletic Club) in River
          Oaks Subdivision. (The Saturday and Sunday runs start earlier (6:30
          AM) during the months of June through September, due to the heat).
        </p>
        <p className="mb-3">
          We run from 4-8 miles normally, although some turn at 2 mile
          turnaround and some go the 8 or more at times. Pace varies but we
          refer to ours as &ldquo;fellowship&rdquo; pace, meaning we typically
          go as slow as any one runner wants to for part of the run; then, if
          some of the gang wants to run faster, we typically do it on the
          latter part of the run, after others have turned back to return to
          the MAC.
        </p>
        <p className="mb-3">
          Typically, there are 3-8 runners, but goes as high as 14 and
          sometimes as low as one or two. (Weather and a million other
          &ldquo;excuses&rdquo;! It is an &ldquo;informal&rdquo; group!).
        </p>
        <p className="mb-4">
          Male and female runners; anyone welcome, whether a member of the
          MAC or not.
        </p>
        <GroupScheduleTable
          rows={[
            { day: "Tuesday", time: "5:30 AM", distance: "4-8 miles" },
            { day: "Thursday", time: "5:30 AM", distance: "4-8 miles" },
            {
              day: "Saturday",
              time: "7:00 AM (6:30 AM June through September)",
              distance: "4-8 miles",
            },
            {
              day: "Sunday",
              time: "7:00 AM (6:30 AM June through September)",
              distance: "4-8 miles",
            },
          ]}
        />
        <p>
          For more details, contact David Thiels at davidthiels@aol.com. We
          also have a Facebook page for the group that anyone is welcome to
          join. It is titled: Monroe Athletic Club Running group.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">
          Ouachita Valley Road Runners
        </h2>
        <p className="mb-4">
          Contact: Emily Tucker via e-mail at{" "}
          <a className="text-red-700 hover:underline" href="mailto:c.mccandlish13@gmail.com">
            c.mccandlish13@gmail.com
          </a>
          .
        </p>
        <GroupScheduleTable
          rows={[
            {
              day: "Monday",
              time: "5:15 PM",
              location: "Old McGuire Church on Arkansas Road (big cemetery)",
              distance: "4-5 miles",
            },
            {
              day: "Tuesday",
              time: "5:15 PM",
              location: "Old McGuire Church on Arkansas Road (big cemetery)",
              distance: "4-5 miles",
            },
            { day: "Wednesday", time: "4:15 PM", location: "Kiroli Park", distance: "4-5 miles" },
            {
              day: "Thursday",
              time: "5:15 PM",
              location: "Old McGuire Church on Arkansas Road (big cemetery)",
              distance: "4-5 miles",
            },
            {
              day: "Saturday",
              time: "6:00 AM",
              location: "Old McGuire Church on Arkansas Road (big cemetery)",
              distance: "Varies",
            },
            { day: "Sunday", time: "3:00 PM", location: "Kiroli Park", distance: "Varies" },
          ]}
        />
      </section>
    </div>
  );
}
