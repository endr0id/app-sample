import type { LabelHTMLAttributes, ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, htmlFor }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
