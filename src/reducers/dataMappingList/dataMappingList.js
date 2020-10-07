import * as dataMapping from "../../actions/dataMappingList";

const initialState = {
  mapping: undefined,
  deleteStatus: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case dataMapping.DATA_MAPPING_LIST_SUCCESS:
      return {
        ...state,
        mapping: action.payload.data,
      };
    case dataMapping.DATA_MAPPING_DELETE_REQUEST:
      return {
        ...state,
        deleteStatus: false,
      };
    case dataMapping.DATA_MAPPING_DELETE_SUCCESS:
      return {
        ...state,
        deleteStatus: true,
      };

    default:
      return state;
  }
};

export const getDataMappingList = (state) => state.mapping;
export const getDataMappingDeleteStatus = (state) => state.deleteStatus;
