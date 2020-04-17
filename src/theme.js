// example theme.js
export default {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  borders: {
    none: 0,
    simple: "1px solid black"
  },
  radii: [0, 5, 10, "50%"],
  colors: {
    blue: "#07c",
    lightgray: "#e8e8e8",
    gray: "#aaaaaa",
    lightgreen: "#eff6e4",
    primary: "#fd3863",
    primaryButtonRadial: "#616161 radial-gradient(circle, transparent 1%, #616161 1%) center/15000%",
    secondaryButtonRadial: "#fff radial-gradient(circle, transparent 1%, #fff 1%) center/15000%",
    error: "red",
    success: "green"
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
    "input-error": {
      border: "simple",
      borderColor: "error"
    },
    "input-success": {
      border: "simple",
      borderColor: "success"
    }
  },
  text: {
  },
  inputs: {
    
  },
  buttons: {
    
  }
}