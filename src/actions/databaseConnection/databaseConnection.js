import { RSAA } from "redux-api-middleware";

export const DATABASE_CONNECTION_LIST_REQUEST =
  "@@databaseconnection/DATABASE_CONNECTION_LIST_REQUEST";
export const DATABASE_CONNECTION_LIST_SUCCESS =
  "@@databaseconnection/DATABASE_CONNECTION_LIST_SUCCESS";
export const DATABASE_CONNECTION_LIST_FAILURE =
  "@@databaseconnection/DATABASE_CONNECTION_LIST_FAILURE";

export const DATABASE_TYPE_LIST_REQUEST =
  "@@databaseconnection/DATABASE_TYPE_LIST_REQUEST";
export const DATABASE_TYPE_LIST_SUCCESS =
  "@@databaseconnection/DATABASE_TYPE_LIST_SUCCESS";
export const DATABASE_TYPE_LIST_FAILURE =
  "@@databaseconnection/DATABASE_TYPE_LIST_FAILURE";

export const DATABASE_CONNECTION_TEST_REQUEST =
  "@@databaseconnection/DATABASE_CONNECTION_TEST_REQUEST";
export const DATABASE_CONNECTION_TEST_SUCCESS =
  "@@databaseconnection/DATABASE_CONNECTION_TEST_SUCCESS";
export const DATABASE_CONNECTION_TEST_FAILURE =
  "@@databaseconnection/DATABASE_CONNECTION_TEST_FAILURE";

export const DATABASE_CONNECTION_SAVE_REQUEST =
  "@@databaseconnection/DATABASE_CONNECTION_SAVE_REQUEST";
export const DATABASE_CONNECTION_SAVE_SUCCESS =
  "@@databaseconnection/DATABASE_CONNECTION_SAVE_SUCCESS";
export const DATABASE_CONNECTION_SAVE_FAILURE =
  "@@databaseconnection/DATABASE_CONNECTION_SAVE_FAILURE";

export const DELETE_DATABASE_CONNECTION_REQUEST =
  "@@databaseconnection/DELETE_DATABASE_CONNECTION_REQUEST";
export const DELETE_DATABASE_CONNECTION_SUCCESS =
  "@@databaseconnection/DELETE_DATABASE_CONNECTION_SUCCESS";
export const DELETE_DATABASE_CONNECTION_FAILURE =
  "@@databaseconnection/DELETE_DATABASE_CONNECTION_FAILURE";

export const UPDATE_DATABASE_CONNECTION_REQUEST =
  "@@databaseconnection/UPDATE_DATABASE_CONNECTION_REQUEST";
export const UPDATE_DATABASE_CONNECTION_SUCCESS =
  "@@databaseconnection/UPDATE_DATABASE_CONNECTION_SUCCESS";
export const UPDATE_DATABASE_CONNECTION_FAILURE =
  "@@databaseconnection/UPDATE_DATABASE_CONNECTION_FAILURE";

export const fetchDatabaseConnectionList = () => ({
  [RSAA]: {
    endpoint: "/api/databaseConnection/showAllConnection",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    types: [
      DATABASE_CONNECTION_LIST_REQUEST,
      DATABASE_CONNECTION_LIST_SUCCESS,
      DATABASE_CONNECTION_LIST_FAILURE,
    ],
  },
});

export const fetchDatabaseTypeList = () => ({
  [RSAA]: {
    endpoint: "/api/databaseConnection/showdatabaseTypes",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    types: [
      DATABASE_TYPE_LIST_REQUEST,
      DATABASE_TYPE_LIST_SUCCESS,
      DATABASE_TYPE_LIST_FAILURE,
    ],
  },
});

export const testDatabaseConnection = (payload) => ({
  [RSAA]: {
    endpoint: "/api/databaseConnection/testConnection",
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      DATABASE_CONNECTION_TEST_REQUEST,
      DATABASE_CONNECTION_TEST_SUCCESS,
      DATABASE_CONNECTION_TEST_FAILURE,
    ],
  },
});

export const saveDatabaseConnection = (payload) => ({
  [RSAA]: {
    endpoint: "/api/databaseConnection/createConnection",
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      DATABASE_CONNECTION_SAVE_REQUEST,
      DATABASE_CONNECTION_SAVE_SUCCESS,
      DATABASE_CONNECTION_SAVE_FAILURE,
    ],
  },
});

export const deleteDatabaseConnection = (payload) => ({
  [RSAA]: {
    endpoint: "/api/databaseConnection/deleteConnection",
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      DELETE_DATABASE_CONNECTION_REQUEST,
      DELETE_DATABASE_CONNECTION_SUCCESS,
      DELETE_DATABASE_CONNECTION_FAILURE,
    ],
  },
});

export const updateDatabaseConnection = (payload) => ({
  [RSAA]: {
    endpoint: "/api/databaseConnection/updateConnection",
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      UPDATE_DATABASE_CONNECTION_REQUEST,
      UPDATE_DATABASE_CONNECTION_SUCCESS,
      UPDATE_DATABASE_CONNECTION_FAILURE,
    ],
  },
});
