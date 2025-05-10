import { createContext, useState } from "react";

export const ContextAccesibility = createContext();

export function ProvideAccesibility({ children }) {
  const [changeContrast, setchangeContrast] = useState(1);
  const [highlightlinks, sethighlightlinks] = useState(false)
  const [changeSize, setchangeSize] = useState(1);

  return (
    <ContextAccesibility.Provider
      value={{ changeContrast, setchangeContrast, changeSize, setchangeSize, highlightlinks, sethighlightlinks }}
    >
      {children}
    </ContextAccesibility.Provider>
  );
}
