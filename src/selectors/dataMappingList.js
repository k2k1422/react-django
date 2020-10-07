import * as dataMapping from "../reducers/dataMappingList";

// for getting the list of Connections
export const getDataMappingList = (state) =>
  dataMapping.getDataMappingList(state.dataMappingList);

export const getDataMappingDeleteStatus = (state) =>
  dataMapping.getDataMappingDeleteStatus(state.dataMappingList);
