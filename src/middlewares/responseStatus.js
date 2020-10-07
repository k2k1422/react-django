import { addAlert } from "../actions/alert";
import { statusCodes, codeMessageMapping } from "../utils/notifications";
import _ from "lodash";

export default ({ dispatch }) => (next) => (action) => {
  try {
    //console.log(action);
    if (action.type.includes("FAILURE")) {
      var { payload } = action;
      try {
        var {
          message: statusMessage,
          response: { code: responseCode, message: responseMessage },
        } = payload;
        //console.log(statusCodes, responseCode);
        if (_.get(statusCodes, responseCode, false)) {
          // show notifications only if statusCodes[responseCode] is true
          dispatch(
            addAlert({
              alertType: "error",
              alertMessage: codeMessageMapping[responseCode],
            })
          );
        }
      } catch (error) {
        dispatch(
          addAlert({
            alertType: "error",
            alertMessage: statusMessage,
          })
        );
      }
    } else if (action.type.includes("SUCCESS")) {
      let { payload } = action;
      let { code: responseCode, message: responseMessage } = payload;
      // console.log(statusCodes, responseCode);
      if (_.get(statusCodes, responseCode, false)) {
        dispatch(
          addAlert({
            alertType: "success",
            alertMessage: codeMessageMapping[responseCode],
          })
        );
      }
    }
  } catch (err) {
    //console.log("Error occurred in responseStatus middleware", err);
    next(action);
  }

  next(action);
};
