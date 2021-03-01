import { TOGGLE_SIDE_NAV } from "./actions";

const appReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_NAV:
      return {
        ...state,
        showSideNav: !state.showSideNav,
      };
    default:
      return state;
  }
};

export default appReducer;
