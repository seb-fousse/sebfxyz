import { ReactNode } from "react";

interface Props {
  id: string;
  heading: string;
  className?: string;
  children?: ReactNode
}

function Section({ id, heading, className, children }: Props) {
  return (
    <section id={id} className={className}>
      <h1 className="sticky top-0 z-10 font-bold text-6xl bg-background p-2">
        {heading}
      </h1>
      {children}
    </section>
  );
}

export default Section;