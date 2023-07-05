import { createContext, useContext, useState } from "react";

const StateContext = createContext(null);
export const useToDoContext = () => useContext(StateContext);
export const StateContextProvider = ({ children }) => {
  const [state, setState] = useState(null);

  return (
    <StateContext.Provider value={(state, setState)}>
      {children}
    </StateContext.Provider>
  );
};
