import { RSAA } from "redux-api-middleware";
import { dataMapping } from "../../urls/endpoints";

// For Table Mapping

export const CONNECTION_LIST_REQUEST = "@@tablemapping/CONNECTION_LIST_REQUEST";
export const CONNECTION_LIST_SUCCESS = "@@tablemapping/CONNECTION_LIST_SUCCESS";
export const CONNECTION_LIST_FAILURE = "@@tablemapping/CONNECTION_LIST_FAILURE";

export const DATA_BY_CONNECTION_LIST_REQUEST =
  "@@tablemapping/DATA_BY_CONNECTION_LIST_REQUEST";
export const DATA_BY_CONNECTION_LIST_SUCCESS =
  "@@tablemapping/DATA_BY_CONNECTION_LIST_SUCCESS";
export const DATA_BY_CONNECTION_LIST_FAILURE =
  "@@tablemapping/DATA_BY_CONNECTION_LIST_FAILURE";

export const connectionList = (payload) => ({
  [RSAA]: {
    endpoint: dataMapping.tableMapping.CONNECTION_LIST,
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      CONNECTION_LIST_REQUEST,
      CONNECTION_LIST_SUCCESS,
      CONNECTION_LIST_FAILURE,
    ],
  },
});

export const databyConnectionId = (payload) => ({
  [RSAA]: {
    endpoint: dataMapping.tableMapping.DATA_BY_CONNECTION_ID,
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      DATA_BY_CONNECTION_LIST_REQUEST,
      DATA_BY_CONNECTION_LIST_SUCCESS,
      DATA_BY_CONNECTION_LIST_FAILURE,
    ],
  },
});

//

//For column mapping

export const MAPPED_COLUMNS_BY_CONNECTION_ID_REQUEST =
  "@@tablemapping/MAPPED_COLUMNS_BY_CONNECTION_ID_REQUEST";
export const MAPPED_COLUMNS_BY_CONNECTION_ID_SUCCESS =
  "@@tablemapping/MAPPED_COLUMNS_BY_CONNECTION_ID_SUCCESS";
export const MAPPED_COLUMNS_BY_CONNECTION_ID_FAILURE =
  "@@tablemapping/MAPPED_COLUMNS_BY_CONNECTION_ID_FAILURE";

export const mappedData = (payload) => ({
  [RSAA]: {
    endpoint: dataMapping.columnMapping.GET_COLUMN_MAPPED_BY_MAPPING_ID,
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      MAPPED_COLUMNS_BY_CONNECTION_ID_REQUEST,
      MAPPED_COLUMNS_BY_CONNECTION_ID_SUCCESS,
      MAPPED_COLUMNS_BY_CONNECTION_ID_FAILURE,
    ],
  },
});

export const SET_CURRENT_MAPPING_DETAILS =
  "@@datamapping/SET_CURRENT_MAPPING_DETAILS";

export const setCurrnetMappingDetails = (payload) => ({
  payload: payload,
  type: SET_CURRENT_MAPPING_DETAILS,
});

export const SET_EDIT_STATUS = "@@datamapping/SET_EDIT_STATUS";

export const setEditStatus = (payload) => ({
  payload: payload,
  type: SET_EDIT_STATUS,
});
