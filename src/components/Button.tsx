import Link from "next/link";
import { ArrowUpRightIcon } from "./ArrowUpRightIcon";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  withIcon?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 px-4 py-3 text-base sm:text-lg tracking-[-0.02em] transition-colors";

const variants = {
  solid: "bg-apasa-teal text-white font-medium hover:bg-apasa-teal/90",
  outline:
    "bg-white border border-apasa-teal text-apasa-teal font-bold hover:bg-apasa-teal-lightest",
};

export function Button({ href, children, variant = "solid", withIcon = false }: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
      {withIcon && <ArrowUpRightIcon className="size-6 shrink-0" />}
    </Link>
  );
}
