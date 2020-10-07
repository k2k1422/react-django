export const ADD_ALERT = "ADD_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const addAlert = (payload) => ({
  type: ADD_ALERT,
  payload: payload,
});

export const closeAlert = () => ({
  type: CLOSE_ALERT,
});
