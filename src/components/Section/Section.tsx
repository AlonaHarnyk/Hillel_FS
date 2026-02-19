import type { ReactNode } from "react";

interface Props {
    title?: string;
    children: ReactNode
}

export const Section = ({ children, title }: Props) => {
  return (
      <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
