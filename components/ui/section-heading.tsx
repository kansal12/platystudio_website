interface SectionHeadingProps {
  title: string | React.ReactNode;
  description: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-white/60 sm:text-xl">{description}</p>
      )}
    </div>
  );
}
