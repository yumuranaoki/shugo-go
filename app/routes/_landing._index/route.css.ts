import { style, type ComplexStyleRule } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const heading = style({
  display: "inline-block",
  color: "transparent",
  background: "linear-gradient(90deg, #4158D0, #C850C0 30%, #FFCC70)",
  "-webkit-background-clip": "text",
} as ComplexStyleRule);
