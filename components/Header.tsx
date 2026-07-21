import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/results", label: "Results" },
  { href: "/running-groups", label: "Running Groups" },
  { href: "/photos", label: "Photos" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="bg-red-700 text-white">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-2xl font-bold tracking-tight">
          Ouachita Valley Road Runners
        </p>
        <p className="text-red-100">Promoting Road Races in North Louisiana</p>
      </div>
      <nav className="bg-red-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap gap-1">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-sm font-medium hover:bg-red-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
