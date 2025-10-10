import { css } from "../../../../styled-system/css";

export const wrapper = css({
  display: "block",
  flexDirection: "column",
  justifyContent: "center",
  paddingX: "12",
  paddingY: "12",
  minHeight: "100vh",
  backgroundColor: "gray.50",
  sm: {
    paddingX: "6",
  },
  lg: {
    paddingX: "8",
  },
});

export const headerContainer = css({
  sm: {
    marginX: "auto",
    width: "100%",
    maxWidth: "28rem",
  },
});

export const logoContainer = css({
  display: "flex",
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
  paddingTop: "2rem",
  paddingBottom: "2rem",
  paddingRight: "1rem",
  paddingLeft: "1rem",
  boxShadow: "var(--shadow-md)",
  backgroundColor: "white",
  sm: {
    borderRadius: "0.5rem",
    paddingRight: "2.5rem",
    paddingLeft: "2.5rem",
  },
});
