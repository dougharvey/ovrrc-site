import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/results", label: "Results" },
  { href: "/running-groups", label: "Running Groups" },
  { href: "/photos", label: "Photos" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="bg-gray-950 text-white sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4 border-b border-white/10">
        <Image
          src="/logo-white.png"
          alt="Ouachita Valley Road Runners logo"
          width={56}
          height={56}
          className="shrink-0"
        />
        <Link href="/" className="group">
          <p className="text-xl sm:text-2xl font-black uppercase tracking-tight group-hover:text-red-500 transition-colors">
            Ouachita Valley Road Runners
          </p>
          <p className="text-xs sm:text-sm text-red-500 font-semibold uppercase tracking-widest">
            Promoting Road Races in North Louisiana
          </p>
        </Link>
      </div>
      <nav className="bg-red-800">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-sm font-bold uppercase tracking-wide hover:bg-red-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
