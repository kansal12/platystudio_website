import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8",

        "max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento",
        "p-4 sm:p-5 lg:p-6",
        "h-fit sm:h-[250px]",
        "bg-white dark:bg-black",
        "border border-transparent dark:border-white/[0.2]",
        "shadow-input dark:shadow-none hover:shadow-xl",
        "flex flex-col",
        "transition duration-200",
        className
      )}
    >
      {/* <div className="relative flex-shrink-0">
        {header}
        <div className="absolute top-2 left-2 z-10 bg-white/90 dark:bg-black/90 rounded-full p-2 shadow-lg backdrop-blur-sm">
          {icon}
        </div>
      </div> */}
      <div className="my-4 sm:my-2 flex-grow flex flex-col group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center mb-2 sm:mb-3">
          <div className="font-sans font-bold text-2xl sm:text-3xl text-[#6366f1] ">
            {title}
          </div>
        </div>
        <div className="font-sans text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed flex-grow">
          {description}
        </div>
      </div>
    </div>
  );
};
