import React, { useContext, useReducer, useRef } from "react";
import reducer from "../reducer/reducer";
import {
  SELECT_CURRENT_NAV,
  TOGGLE_MOBILE_NAV,
  RESIZE_WINDOW,
} from "../helpers/actions";

const AppContext = React.createContext();
const initialState = {
  currentNav: "Data Visualisation",
  showMobileNav: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navOverlayContainer = useRef();
  const onNavClick = (navlink, container) => {
    dispatch({ type: SELECT_CURRENT_NAV, payload: { navlink, container } });
  };

  const toggleMobileNav = (navcontainer) => {
    dispatch({ type: TOGGLE_MOBILE_NAV, payload: navcontainer });
  };

  const resizeWindow = (container) => {
    dispatch({ type: RESIZE_WINDOW, payload: container });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        onNavClick,
        toggleMobileNav,
        resizeWindow,
        navOverlayContainer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
