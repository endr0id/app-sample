import { stack } from "../../../../styled-system/patterns";

type FormProps = {
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const ColumnForm = ({ children, onSubmit }: FormProps) => {
  return (
    <form
      className={stack({
        gap: "6",
        padding: "6",
      })}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default ColumnForm;
