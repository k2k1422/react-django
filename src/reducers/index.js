import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth";
import persist from "./persist";
import alert from "./alert";
import * as authActions from "../actions/auth";


const appReducer = (history) =>
  combineReducers({
    alert: alert,
    auth: auth,
    persist: persist,
    router: connectRouter(history),
  });

  
const rootReducer = (history) => (state, action) => {
  if (
    action.type === authActions.LOGOUT ||
    action.type === "RESET_REDUX_STORE"
  ) {
    state = {
      // ...appReducer(history)(undefined, {}),
      auth: { ...auth(undefined, {}), logout: true },
      persist: { persistStatus: true },
    };
  }
  return appReducer(history)(state, action);
};

export default rootReducer;

