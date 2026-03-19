import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};
