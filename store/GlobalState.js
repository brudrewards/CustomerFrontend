import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    navbar: false,
    auth: {},
  };

  const [state, dispatch] = useReducer(reducers, initialState);
  useEffect(() => {
    console.log("state", state);
  }, [state]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
