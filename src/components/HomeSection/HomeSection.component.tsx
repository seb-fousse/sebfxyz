import { ReactNode } from "react";

interface Props {
  id: string;
  heading: string;
  className?: string;
  children?: ReactNode
}

function HomeSection({ id, heading, className, children }: Props) {
  return (
    <section id={id} className={className}>
      <h1 className="sticky top-0 z-10 font-bold text-6xl text-neutral-800 dark:text-orange-100 bg-orange-50 dark:bg-neutral-900 p-2">
        {heading}
      </h1>
      {children}
    </section>
  );
}

export default HomeSection;