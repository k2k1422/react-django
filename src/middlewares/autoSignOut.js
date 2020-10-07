import { isRSAA, RSAA } from "redux-api-middleware";

import { getAccessToken, getUserID } from "../selectors/auth";
import { logout } from "../actions/auth";

export default ({ dispatch }) => (next) => (action) => {
  if (action.type.includes("FAILURE")) {
    if (action.payload.statusText === "Unauthorized") {
      dispatch(logout());
    }
  }
  next(action);
};
