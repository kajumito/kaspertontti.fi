import { ReactNode } from "react";
export const Paragraph = ({ children }: { children: ReactNode }) => (
  <p className="text-white leading-6 xs:leading-5 font-normal mb-2 xl:text-base xl:leading-6 sm:text-sm ">
    {children}
  </p>
);
