
import { createContext, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {

  const [test, setTest] = useState(false);

  return (
    <NotificationContext.Provider value={{test, setTest}}>
      {children}
    </NotificationContext.Provider>
  );
};