import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-8 flex items-center gap-4 text-sm">
        <Image
          src="/logo-white.png"
          alt="Ouachita Valley Road Runners logo"
          width={40}
          height={40}
          className="shrink-0 opacity-80"
        />
        <div>
          <p className="font-black uppercase tracking-tight text-white mb-1">
            Ouachita Valley Road Runners
          </p>
          <p>Ouachita Valley Road Runners Club, Inc. &middot; Est. 1979</p>
        </div>
      </div>
    </footer>
  );
}
