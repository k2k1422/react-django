export const initialState = {
  persistStatus: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "persist/REHYDRATE":
      return {
        ...state,
        persistStatus: true,
      };
    default:
      return state;
  }
};

export const getPersistStatus = (state) => state.persistStatus;
