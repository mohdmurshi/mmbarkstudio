export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="space-y-4">
      {eyebrow ? <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">{eyebrow}</p> : null}
      <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-white sm:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">{description}</p> : null}
    </div>
  );
}