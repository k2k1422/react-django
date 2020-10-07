import * as persist from "../reducers/persist";

export const getPersistStatus = (state) =>
  persist.getPersistStatus(state.persist);
