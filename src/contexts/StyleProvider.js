import { useTheme } from "@mui/material";
import { createContext } from "react";

export const StyleContext = createContext();

export function StyleProvider({ children }) {

  const style = {
    blackColor: {
        color: RGBA(0, 0, 0, 100),
    },
    greenColor: {
      color: RGBA(48, 159, 99, 100),
    },
    redColor: {
        color: RGBA(239, 44, 44, 100),
    },
    yellowColor: {
        color: RGBA(FBC103, 100),
    },
    bgGrey: {
        color: RGBA(232, 232, 232, 70),
    },
    greyColor: {
      color: RGBA(232, 232, 232, 100),
    },
    greyFocusColor: {
        color: RGBA(217, 217, 217, 100),
    },
    whiteColor: {
        color: RGBA(255, 255, 255, 100),
    },
    FontColor: {
        color: RGBA(90, 100, 116, 100),
    }
  };

  return (
    <StyleContext.Provider value={style}>
      {children}
    </StyleContext.Provider>
  );
};