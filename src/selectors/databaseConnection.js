import * as databaseConnection from "../reducers/databaseConnection";

export const getDatabaseConnectionList = (state) =>
  databaseConnection.getDatabaseConnectionList(state.databaseConnection);

export const getDatabaseTypeList = (state) =>
  databaseConnection.getDatabaseTypeList(state.databaseConnection);

export const getSaveStatus = (state) =>
  databaseConnection.getSaveStatus(state.databaseConnection);

export const getTestStatus = (state) =>
  databaseConnection.getTestStatus(state.databaseConnection);

export const getDeleteStatus = (state) =>
  databaseConnection.getDeleteStatus(state.databaseConnection);

export const getUpdateStatus = (state) =>
  databaseConnection.getUpdateStatus(state.databaseConnection);
