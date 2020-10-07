import { RSAA } from "redux-api-middleware";
import { dataMapping } from "../../urls/endpoints";

// For Table Mapping

export const DATA_MAPPING_LIST_REQUEST =
  "@@dataMappingList/DATA_MAPPING_LIST_REQUEST";
export const DATA_MAPPING_LIST_SUCCESS =
  "@@dataMappingList/DATA_MAPPING_LIST_SUCCESS";
export const DATA_MAPPING_LIST_FAILURE =
  "@@dataMappingList/DATA_MAPPING_LIST_FAILURE";

export const DATA_MAPPING_DELETE_REQUEST =
  "@@dataMappingList/DATA_MAPPING_DELETE_REQUEST";
export const DATA_MAPPING_DELETE_SUCCESS =
  "@@dataMappingList/DATA_MAPPING_DELETE_SUCCESS";
export const DATA_MAPPING_DELETE_FAILURE =
  "@@dataMappingList/DATA_MAPPING_DELETE_FAILURE";

export const fetchDataMappingList = (payload) => ({
  [RSAA]: {
    endpoint: dataMapping.dataMappingList.DATA_MAPPING_LIST,
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      DATA_MAPPING_LIST_REQUEST,
      DATA_MAPPING_LIST_SUCCESS,
      DATA_MAPPING_LIST_FAILURE,
    ],
  },
});

export const deleteDataMappingList = (payload) => ({
  [RSAA]: {
    endpoint: dataMapping.dataMappingList.DATA_MAPPING_LIST_DELETE,
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    types: [
      DATA_MAPPING_DELETE_REQUEST,
      DATA_MAPPING_DELETE_SUCCESS,
      DATA_MAPPING_DELETE_FAILURE,
    ],
  },
});
