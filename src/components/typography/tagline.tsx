import { ReactNode } from "react";
import { Paragraph } from ".";
export const Tagline = ({ children }: { children: ReactNode }) => (
  <Paragraph>
    <span className="italic">{children}</span>
  </Paragraph>
);
