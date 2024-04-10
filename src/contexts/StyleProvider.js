
import { createContext } from "react";

export const StyleContext = createContext();

export function StyleProvider({ children }) {

  const style = {

  };

  return (
    <StyleContext.Provider value={style}>
      {children}
    </StyleContext.Provider>
  );
};