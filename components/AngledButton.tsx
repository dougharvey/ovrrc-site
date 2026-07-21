import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "bordered";
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

export default function AngledButton({
  href,
  children,
  variant = "solid",
  size = "md",
  external = false,
  className = "",
}: Props) {
  const base =
    "inline-block text-center font-bold uppercase tracking-wide transition-colors -skew-x-6";
  const sizes = {
    md: "px-6 py-3 text-sm",
    sm: "px-3 py-2 text-sm",
  };
  const variants = {
    solid: "bg-red-700 text-white hover:bg-red-800",
    outline: "border-2 border-white text-white hover:bg-white hover:text-red-800",
    bordered:
      "border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white",
  };

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span className="inline-block skew-x-6">{children}</span>
    </Link>
  );
}
