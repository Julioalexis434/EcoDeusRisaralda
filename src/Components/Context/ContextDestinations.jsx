import { createContext, useState } from "react";
import PlacesLits from '../PlacesList.json'
export const ContextDestinations = createContext();

export function ProviderDestinations({ children }) {
  const [destinations, setdestinations] = useState(PlacesLits);
  return (
    <ContextDestinations.Provider value={{ destinations, setdestinations }}>
      {children}
    </ContextDestinations.Provider>
  );
}
