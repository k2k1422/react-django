import * as dataMapping from "../reducers/dataMapping";

// for getting the list of Connections
export const getConnList = (state) =>
  dataMapping.getConnList(state.dataMapping);

export const getConnStatus = (state) =>
  dataMapping.getConnStatus(state.dataMapping);

//for fetching data by selected connection id

export const getDataByConnID = (state) =>
  dataMapping.getDataByConnID(state.dataMapping);

export const getDataByConnIDStatus = (state) =>
  dataMapping.getDataByConnIDStatus(state.dataMapping);

export const getCurrentMappingDetails = (state) =>
  dataMapping.getCurrentMappingDetails(state.dataMapping);

export const getEditStatus = (state) =>
  dataMapping.getEditStatus(state.dataMapping);
