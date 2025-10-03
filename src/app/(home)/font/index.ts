import localFont from "next/font/local";

export const pretendard = localFont({
  src: "./pretendard-variable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const hack = localFont({
  src: [
    {
      path: "./hack-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./hack-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./hack-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./hack-bolditalic.woff2",
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
      path: "./BackyardBlack_PERSONAL.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./BackyardBlackItalic_PERSONAL.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-backyard",
});

export const allFontVariable = `${pretendard.variable} ${hack.variable} ${backyard.variable}`;
