import { createContext, useContext, useReducer } from "react";
import { TOGGLE_SIDE_NAV } from "./actions";
import reducer from "./reducer";

const initialAppState = {
  showSideNav: false,
  data: {
    shortenUrl: [],
  },
};

const ApppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  const toggleSideNav = () => {
    dispatch({ type: TOGGLE_SIDE_NAV });
  };

  return (
    <ApppContext.Provider value={{ state, toggleSideNav }}>
      {children}
    </ApppContext.Provider>
  );
};

const useAppState = () => useContext(ApppContext);

export { useAppState, AppContextProvider };
