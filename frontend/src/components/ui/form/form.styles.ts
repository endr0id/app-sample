import { css } from "../../../../styled-system/css";

export const textFieldRecipe = css({
  width: "full",
  marginTop: "0.25rem",
  paddingX: "3",
  paddingY: "1",
  borderColor: "gray.300",
  borderRadius: "md",
  borderWidth: "1px",
  _focusVisible: {
    outline: "none",
    ringWidth: "1",
    borderColor: "black",
  },
});

export const errorTextRecipe = css({
  marginTop: "0.25rem",
  fontSize: "0.75rem",
  fontWeight: "semibold",
  color: "red.500",
});
