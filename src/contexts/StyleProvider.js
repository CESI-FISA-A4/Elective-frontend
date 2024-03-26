
import { createContext } from "react";

export const StyleContext = createContext();

export function StyleProvider({ children }) {

  const style = {
    blackColor: {
        color: 'rgba(0, 0, 0, 100)',
    },
    greenColor: {
      color: 'rgba(48, 159, 99, 100)',
    },
    redColor: {
        color: 'rgba(239, 44, 44, 100)',
    },
    yellowColor: {
        color: 'rgba(FBC103, 100)',
    },
    bgGrey: {
        color: 'rgba(232, 232, 232, 70)',
    },
    greyColor: {
      color: 'rgba(232, 232, 232, 100)',
    },
    greyFocusColor: {
        color: 'rgba(217, 217, 217, 100)',
    },
    whiteColor: {
        color: 'rgba(255, 255, 255, 100)',
    },
    FontColor: {
        color: 'rgba(90, 100, 116, 100)',
    }
  };

  return (
    <StyleContext.Provider value={style}>
      {children}
    </StyleContext.Provider>
  );
};