/** @type {import('tailwindcss').Config} */
import { theme } from './src/contexts/MainPalette';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.main,
        blackColor: theme.palette.blackColor.main,
        greenColor: theme.palette.greenColor.main,
        redColor: theme.palette.redColor.main,
        yellowColor: theme.palette.yellowColor.main,
        bgGreyColor: theme.palette.bgGrey.main,
        greyColor: theme.palette.greyColor.main,
        greyFocusColor: theme.palette.greyFocusColor.main,
        whiteColor: theme.palette.whiteColor.main,
        fontColor: theme.palette.FontColor.main
      },
      fontSize: {
        mainTitle : "2.5rem",
        standard : "1rem",
      }
    },
  },
  plugins: [],
}