import LocalFont from "next/font/local";
const lalezarFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/lalezar-700.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lalezar-Regular.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-lalezar",
  style: "normal",
  display: "block",
});

export default lalezarFont;
