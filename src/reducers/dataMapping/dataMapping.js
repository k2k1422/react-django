import * as dataMapping from "../../actions/dataMapping";

const initialState = {
  connList: undefined,
  dataByConnID: undefined,
  dataByConnIDStatus: false,
  connStatus: false,
  currentMappingDetails: undefined,
  mappedData: undefined,
  mappedDataStatus: false,
  editStatus: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dataMapping.CONNECTION_LIST_REQUEST:
      return {
        ...state,
        connStatus: true,
      };
    case dataMapping.CONNECTION_LIST_SUCCESS:
      return {
        ...state,
        connList: action.payload.data,
        connStatus: false,
      };

    case dataMapping.CONNECTION_LIST_FAILURE:
      return {
        ...state,
        connStatus: false,
      };

    //   data by connection id

    case dataMapping.DATA_BY_CONNECTION_LIST_REQUEST:
      return {
        ...state,
        dataByConnIDStatus: true,
      };
    case dataMapping.DATA_BY_CONNECTION_LIST_SUCCESS:
      return {
        ...state,
        dataByConnID: action.payload.data,
        dataByConnIDStatus: false,
      };

    case dataMapping.DATA_BY_CONNECTION_LIST_FAILURE:
      return {
        ...state,
        dataByConnIDStatus: false,
      };
    //mapped data by connection id
    case dataMapping.DATA_BY_CONNECTION_LIST_REQUEST:
      return {
        ...state,
        dataByConnIDStatus: true,
      };
    case dataMapping.DATA_BY_CONNECTION_LIST_SUCCESS:
      return {
        ...state,
        dataByConnID: action.payload.data,
        dataByConnIDStatus: false,
      };

    case dataMapping.DATA_BY_CONNECTION_LIST_FAILURE:
      return {
        ...state,
        dataByConnIDStatus: false,
      };

    case dataMapping.SET_CURRENT_MAPPING_DETAILS:
      return {
        ...state,
        currentMappingDetails: action.payload,
      };

    case dataMapping.SET_EDIT_STATUS:
      return {
        ...state,
        editStatus: action.payload,
      };

    default:
      return state;
  }
};

export const getConnList = (state) => state.connList;

export const getConnStatus = (state) => state.connStatus;

export const getDataByConnID = (state) => state.getDataByConnID;

export const getDataByConnIDStatus = (state) => state.getDataByConnIDStatus;

export const getCurrentMappingDetails = (state) => state.currentMappingDetails;

export const getEditStatus = (state) => state.editStatus;
