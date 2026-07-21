import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

export default function AngledButton({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-block px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors -skew-x-6";
  const solid = "bg-red-700 text-white hover:bg-red-800";
  const outline =
    "border-2 border-white text-white hover:bg-white hover:text-red-800";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variant === "solid" ? solid : outline} ${className}`}
    >
      <span className="inline-block skew-x-6">{children}</span>
    </Link>
  );
}
