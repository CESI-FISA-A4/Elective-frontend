import { useTheme } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";
import { createContext, useState } from "react";

export const StyleContext = createContext();

export function StyleProvider({ children }) {
  const { theme } = useTheme();

  const style = {
    bgPrimary: {
      backgroundColor: blue[200],
    },
    bgSecondary: {
      backgroundColor: green[200],
    },
    bgGrey: {
      backgroundColor: grey[200]
    },
    bgLightGrey: {
      backgroundColor: grey[50]
    }
  };

  return (
    <StyleContext.Provider value={style}>
      {children}
    </StyleContext.Provider>
  );
};