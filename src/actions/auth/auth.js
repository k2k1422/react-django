import { RSAA } from "redux-api-middleware";

export const LOGIN_REQUEST = "@@auth/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "@@auth/LOGIN_FAILURE";

export const TOKEN_REQUEST = "@@auth/TOKEN_REQUEST";
export const TOKEN_RECEIVED = "@@auth/TOKEN_RECEIVED";
export const TOKEN_FAILURE = "@@auth/TOKEN_FAILURE";

export const USER_META_DATA_REQUEST = "@@auth/USER_META_DATA_REQUEST";
export const USER_META_DATA_RECEIVED = "@@auth/USER_META_DATA_RECEIVED";
export const USER_META_DATA_FAILURE = "@@auth/USER_META_DATA_FAILURE";

export const LOGOUT = "LOGOUT";

export const login = (username, password) => ({
  [RSAA]: {
    endpoint: "/atx_scheduler/api/auth/token/",
    method: "POST",
    body: JSON.stringify({ username: username, password: password }),
    headers: { "Content-Type": "application/json" },
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  },
});

export const refreshAccessToken = (token) => ({
  [RSAA]: {
    endpoint: "/atx_scheduler/api/auth/token/refresh/",
    method: "POST",
    body: JSON.stringify({ refresh: token }),
    headers: { "Content-Type": "application/json" },
    types: [TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE],
  },
});

export const fetchUserMetaData = () => ({
  [RSAA]: {
    endpoint: "/atx_scheduler/api/auth/getUserData/",
    method: "POST",
    body: JSON.stringify({}),
    headers: { "Content-Type": "application/json" },
    types: [
      USER_META_DATA_REQUEST,
      USER_META_DATA_RECEIVED,
      USER_META_DATA_FAILURE,
    ],
  },
});

export const logout = () => ({
  type: LOGOUT,
});
