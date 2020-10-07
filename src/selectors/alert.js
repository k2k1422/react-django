import * as alert from "../reducers/alert";

export const getAlertMessage = (state) => alert.getMessage(state.alert);

export const getAlertType = (state) => alert.getType(state.alert);

export const getAlertStackMessage = (state) =>
  alert.getAlertMessage(state.alert);

export const getAlertStackStatus = (state) => alert.getAlertStatus(state.alert);
