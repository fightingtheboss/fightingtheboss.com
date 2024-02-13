import { Link2Icon } from "@radix-ui/react-icons";
import { ReactNode } from "react";

interface HeadingProps {
  id?: string;
  children?: ReactNode;
}

const heading = (HeadingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const Heading = ({ id, children }: HeadingProps) => (
    <a href={`#${id}`} className="group relative no-underline">
      <Link2Icon className="absolute -left-8 bottom-[2px] hidden h-7 w-7 p-1 text-slate-500 group-hover:block dark:text-slate-300" />
      <HeadingType id={id}>{children}</HeadingType>
    </a>
  );

  Heading.displayName = HeadingType;

  return Heading;
};

export default heading;
