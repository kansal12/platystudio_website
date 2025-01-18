interface SectionHeadingProps {
  title: string | React.ReactNode;
  description: string;
}

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-xl text-white/60 sm:text-2xl">{description}</p>
    </div>
  );
}
