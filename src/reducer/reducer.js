import {
  RESIZE_WINDOW,
  SELECT_CURRENT_NAV,
  TOGGLE_MOBILE_NAV,
} from "../helpers/actions";

const reducer = (state, action) => {
  if (action.type === SELECT_CURRENT_NAV) {
    if (action.payload.navlink === "Cindy Lung") {
      return (action.payload.navlink = "Data Visualisation");
    }
    if (action.payload.container !== null) {
      closeMobileNav(action.payload.container.current);
    }
    return {
      ...state,
      currentNav: action.payload.navlink,
      showMobileNav: false,
    };
  }

  if (action.type === TOGGLE_MOBILE_NAV) {
    if (!state.showMobileNav) {
      openMobileNav(action.payload.current);
    }
    if (state.showMobileNav) {
      closeMobileNav(action.payload.current);
    }
    return { ...state, showMobileNav: !state.showMobileNav };
  }
  if (action.type === RESIZE_WINDOW) {
    closeMobileNav(action.payload.current);
    return { ...state, showMobileNav: false};
  }

  return state;
};

const openMobileNav = (element) => {
  element.style.transform = "translateY(0vh)";
  element.style.opacity = "0.9";
};

const closeMobileNav = (element) => {
  element.style.transform = "translateY(-110vh)";
  element.style.opacity = "0";
};

export default reducer;
