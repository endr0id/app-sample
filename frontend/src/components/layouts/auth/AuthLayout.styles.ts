import { css, cx } from "../../../../styled-system/css";
import { flex } from "../../../../styled-system/patterns";

export const authWrapper = cx(
  flex({
    direction: "column",
    justifyContent: "center",
  }),
  css({
    minHeight: "100vh",
    backgroundColor: "gray.50",
  }),
);

export const authHeader = css({
  sm: {
    marginX: "auto",
    width: "100%",
    maxWidth: "28rem",
  },
});

export const logoContainer = flex({
  justifyContent: "center",
});

export const titleStyle = css({
  marginTop: "0.75rem",
  textAlign: "center",
  lineHeight: "2.25rem",
  fontSize: "1.875rem",
  fontWeight: "800",
  color: "gray.900",
});

export const contentWrapper = css({
  marginTop: "2rem",
  sm: {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    maxWidth: "28rem",
  },
});

export const contentBox = css({
  paddingX: "1rem",
  paddingY: "2rem",
  boxShadow: "var(--shadow-md)",
  backgroundColor: "white",
  sm: {
    borderRadius: "0.5rem",
    paddingRight: "2.5rem",
    paddingLeft: "2.5rem",
  },
});
