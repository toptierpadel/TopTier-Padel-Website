type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#0077C8]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}