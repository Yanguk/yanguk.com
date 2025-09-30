import localFont from "next/font/local";

export const pretendard = localFont({
  src: "../../fonts/pretendard-variable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const hack = localFont({
  src: [
    {
      path: "../../fonts/hack-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/hack-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/hack-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/hack-bolditalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-hack",
});

export const backyard = localFont({
  src: [
    {
      path: "../../fonts/BackyardBlack_PERSONAL.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/BackyardBlackItalic_PERSONAL.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-backyard",
});

export const allFontVariable = `${pretendard.variable} ${hack.variable} ${backyard.variable}`;
