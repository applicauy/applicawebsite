import localFont from "next/font/local";

export const apexFont = localFont({
  src: [
    {
      path: "./Apex New Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Apex New Book Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Apex New Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Apex New Bold Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Apex New Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Apex New Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Apex New Medium Italic.otf",
      weight: "500",
      style: "italic",
    },
  ],
});

export const avigeaFont = localFont({
  src: [
    {
      path: "./Avigea.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "./Avigea.woff2",
      style: "italic",
      weight: "400",
    },
  ],
});
