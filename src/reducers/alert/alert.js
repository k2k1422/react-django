import * as alert from "../../actions/alert";

export const initialState = {
  alertType: undefined,
  alertMessage: undefined,
  alert: undefined,
  message: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case alert.ADD_ALERT:
      return {
        ...state,
        alert: true,
        message: action.payload,
      };
    case alert.CLOSE_ALERT:
      return {
        ...state,
        alert: false,
      };
    default:
      return state;
  }
};

export const getType = (state) => state.alertType;

export const getMessage = (state) => state.alertMessage;

export const getAlertStatus = (state) => {
  return state.alert;
};

export const getAlertMessage = (state) => {
  return state.message;
};
