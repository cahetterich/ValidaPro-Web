// src/ds/tokens.js
const tokens = {
  colors: {
    primary: "#1E6F9F",
    primarySoft: "#E2F0F8",
    primaryStrong: "#114B69",

    success: "#00A896",
    successSoft: "#E0F6F2",

    warning: "#FFB703",
    warningSoft: "#FFF4D7",

    text: "#222222",
    textSoft: "rgba(34, 34, 34, 0.7)",
    textSubtle: "rgba(34, 34, 34, 0.55)",

    bg: "#F2F2F2",
    surface: "#FFFFFF",

    borderSubtle: "rgba(15, 23, 42, 0.06)",
    borderSoft: "rgba(15, 23, 42, 0.12)",
  },

  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    pill: "999px",
  },

  shadow: {
    soft: "0 1px 2px rgba(15, 23, 42, 0.06)",
    md: "0 12px 30px rgba(15, 23, 42, 0.12)",
  },

  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },

  layout: {
    maxWidth: "1120px",
  },

  typography: {
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    h1: "clamp(2rem, 3vw, 2.6rem)",
    h2: "clamp(1.4rem, 2.4vw, 1.8rem)",
    body: "0.95rem",
    small: "0.85rem",
  },
};

export default tokens;
