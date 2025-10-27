import { css } from "../../../../styled-system/css";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={css({
        paddingX: "1rem",
        paddingY: "2rem",
        borderRadius: "0.5rem",
        backgroundColor: "token(colors.card)",
        sm: {
          paddingX: "2.5rem",
        },
      })}
    >
      {children}
    </div>
  );
};

export default Card;
