import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition";

  const variantClasses =
    variant === "primary"
      ? "bg-slate-950 text-white hover:bg-slate-800"
      : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-100";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}