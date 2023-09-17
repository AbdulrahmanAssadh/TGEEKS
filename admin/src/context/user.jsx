import { useReducer, useMemo, createContext, useContext } from "react";
import PropTypes from "prop-types";

export const User = createContext(null);
User.displayName = "UserContext";

export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "SIDENAV_COLOR": {
      return { ...state, sidenavColor: action.value };
    }
    case "TRANSPARENT_NAVBAR": {
      return { ...state, transparentNavbar: action.value };
    }
    case "FIXED_NAVBAR": {
      return { ...state, fixedNavbar: action.value };
    }
    case "OPEN_CONFIGURATOR": {
      return { ...state, openConfigurator: action.value };
    }
    case "ADD_ACCOUNT": {
      return { ...state, account: action.value };
    }
    case "REMOVE_ACCOUNT": {
      return { ...state, account: null };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function MaterialTailwindControllerProvider({ children }) {
  const initialState = {
    openSidenav: false,
    sidenavColor: "from-purple-400 to-purple-600",
    sidenavType: "dark",
    transparentNavbar: true,
    fixedNavbar: false,
    openConfigurator: false,
    account: null,
  };

  const [controller, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return <User.Provider value={value}>{children}</User.Provider>;
}

export function useMaterialTailwindController() {
  const context = useContext(User);

  if (!context) {
    throw new Error(
      "useMaterialTailwindController should be used inside the MaterialTailwindControllerProvider."
    );
  }

  return context;
}

MaterialTailwindControllerProvider.displayName = "/src/context/user.jsx";

MaterialTailwindControllerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const setOpenSidenav = (dispatch, value) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setSidenavColor = (dispatch, value) =>
  dispatch({ type: "SIDENAV_COLOR", value });
export const setTransparentNavbar = (dispatch, value) =>
  dispatch({ type: "TRANSPARENT_NAVBAR", value });
export const setFixedNavbar = (dispatch, value) =>
  dispatch({ type: "FIXED_NAVBAR", value });
export const setOpenConfigurator = (dispatch, value) =>
  dispatch({ type: "OPEN_CONFIGURATOR", value });
export const login = (dispatch, value) =>
  dispatch({ type: "ADD_ACCOUNT", value });
export const logout = (dispatch) => dispatch({ type: "REMOVE_ACCOUNT" });
