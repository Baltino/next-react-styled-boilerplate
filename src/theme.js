// example theme.js
export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  borders: {
    none: 0,
  },
  radii: [0, 5, 10, "50%"],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
    gray: "#a6a7a9",
    lightgreen: "#eff6e4",
    primary: "#fd3863",
    primaryButtonRadial: "#616161 radial-gradient(circle, transparent 1%, #616161 1%) center/15000%",
    secondaryButtonRadial: "#fff radial-gradient(circle, transparent 1%, #fff 1%) center/15000%",
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  sizes: [
    0, 2, 4, 8, 16, 32, 64, 128, 256, 512
  ],
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    bottom: "0px 4px 10px -2px rgba(0,0,0,0.56)",
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  variants: {
  },
  text: {
  },
  buttons: {
    primary: {
      color: "white",
      bg: "primary",
      "&:hover": {
      },
      "&:active": {
        backgroundSize: "100%",
        transition: "background 0s",
      }
    },
    secondary: {
      color: "white",
      bg: "gray",
      "&:hover": {
      },
      "&:active": {
        backgroundSize: "100%",
        transition: "background 0s",
      }
    },
    empty: {
      color: "primary",
      bg: "transparent"
    }
  }
}