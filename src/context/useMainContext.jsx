import { createContext, useState } from 'react';

export const UseMainContext = createContext(null);

export function UseMainContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <UseMainContext.Provider value={{ theme, setTheme }}>
      {children}
    </UseMainContext.Provider>
  );
}
