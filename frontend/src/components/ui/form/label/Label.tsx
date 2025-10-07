import type { LabelHTMLAttributes } from "react";

type LabelProps = {
  children: React.ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;

const Label = ({ children, htmlFor }: LabelProps) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;
