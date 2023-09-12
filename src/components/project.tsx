import { ReactNode } from "react";

const Project = ({
  children,
  title,
  link,
}: {
  children: ReactNode;
  title: string;
  link: string;
}) => (
  <div className="flex flex-col items-start">
    <span className="text-[10px]">{title}</span>
    <a
      href={link}
      target="_blank"
      className="cursor-pointer bg-white bg-opacity-20 hover:bg-opacity-40 text-white mr-2"
    >
      {children}
    </a>
  </div>
);

export default Project;
