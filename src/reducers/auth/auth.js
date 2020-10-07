import jwtDecode from "jwt-decode";
import * as auth from "../../actions/auth";
const initialState = {
  access: undefined,
  refresh: undefined,
  errors: {},
  logout: undefined,
  user_meta_data: undefined
};
export default (state = initialState, action) => {
  switch (action.type) {
    case auth.LOGIN_SUCCESS:
      return {
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access),
        },
        refresh: {
          token: action.payload.refresh,
          ...jwtDecode(action.payload.refresh),
        },
        errors: {},
        logout: false
      };
    case auth.TOKEN_RECEIVED:
      return {
        ...state,
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access),
        },
      };
    case auth.LOGIN_FAILURE:
    case auth.TOKEN_FAILURE:
      return {
        access: undefined,
        refresh: undefined,
        errors: action.payload.response || {
          non_field_errors: action.payload.statusText,
        },
      };
      case auth.USER_META_DATA_RECEIVED:
      return {
        ...state,
        user_meta_data: action.payload.data 
      };
    default:
      return state;
  }
};

export function getAccessToken(state) {
  if (state.access) {
    return state.access.token;
  }
}

export function getRefreshToken(state) {
  if (state.refresh) {
    return state.refresh.token;
  }
}

export function isAccessTokenExpired(state) {
  if (state.access && state.access.exp) {
    return 1000 * state.access.exp - new Date().getTime() < 5000;
  }
  return true;
}
export function isRefreshTokenExpired(state) {
  if (state.refresh && state.refresh.exp) {
    return 1000 * state.refresh.exp - new Date().getTime() < 5000;
  }
  return true;
}
export function isAuthenticated(state) {
  return !isRefreshTokenExpired(state);
}
export function getUserID(state) {
  if (state.access) {
    return state.access.user_id;
  }
  return null;
}
export function getErrors(state) {
  return state.errors;
}
export const getLogoutStatus = (state) => {
  return state.logout
}

export const getUserMetaData = state => {
  return state.user_meta_data
}
