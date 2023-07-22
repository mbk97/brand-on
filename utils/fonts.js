import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/ClashDisplay-Extralight.otf",
      weight: "200",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.otf",
      weight: "500 ",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.otf",
      weight: "600",
    },
  ],
});
