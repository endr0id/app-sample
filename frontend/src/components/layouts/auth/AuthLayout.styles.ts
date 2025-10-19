import { css, cx } from "../../../../styled-system/css";
import { flex } from "../../../../styled-system/patterns";

export const authWrapper = cx(
  flex({
    direction: "column",
    justifyContent: "center",
  }),
  css({
    minHeight: "100vh",
  }),
);

export const contentWrapper = css({
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
  maxWidth: "28rem",
});

export const logoContainer = flex({
  justifyContent: "center",
});

export const greetingRecipe = css({
  marginTop: "1.5rem",
  marginBottom: "1rem",
  textAlign: "center",
  fontSize: "xl",
  fontWeight: "700",
});

export const headingRecipe = css({
  textAlign: "center",
  fontSize: "0.85rem",
});
