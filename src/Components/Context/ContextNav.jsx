import { createContext, useState } from "react";

export const ContextNav = createContext();

export function ProviderNav({ children }) {
  const [links, setLinks] = useState([
    { url: "/", name: "Inicio", delay: 0.5 },
    { url: "destinations", name: "Destinos", delay: 0.7 },
  ]);
  return (
    <ContextNav.Provider value={{ links, setLinks }}>
      {children}
    </ContextNav.Provider>
  );
}
