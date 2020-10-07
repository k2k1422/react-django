/* eslint-disable default-case */
import produce from "immer";
import * as databaseConnection from "../../actions/databaseConnection";

const initialState = {
  databaseConnectionList: undefined,
  databaseType: undefined,
  saveSuccess: false,
  testSuccess: false,
  deleteSuccess: false,
  updateSuccess: false,
};

export default produce((draftState, action) => {
  switch (action.type) {
    case databaseConnection.DATABASE_CONNECTION_LIST_SUCCESS:
      draftState.databaseConnectionList = action.payload.data;
      break;
    case databaseConnection.DATABASE_TYPE_LIST_SUCCESS:
      draftState.databaseType = action.payload.data;
      break;
    case databaseConnection.DATABASE_CONNECTION_TEST_REQUEST:
      draftState.testSuccess = false;
      break;
    case databaseConnection.DATABASE_CONNECTION_TEST_SUCCESS:
      draftState.testSuccess = true;
      break;
    case databaseConnection.DATABASE_CONNECTION_SAVE_REQUEST:
      draftState.saveSuccess = false;
      break;
    case databaseConnection.DATABASE_CONNECTION_SAVE_SUCCESS:
      draftState.saveSuccess = true;
      break;
    case databaseConnection.DELETE_DATABASE_CONNECTION_REQUEST:
      draftState.deleteSuccess = false;
      break;
    case databaseConnection.DELETE_DATABASE_CONNECTION_SUCCESS:
      draftState.deleteSuccess = true;
      break;
    case databaseConnection.UPDATE_DATABASE_CONNECTION_REQUEST:
      draftState.updateSuccess = false;
      break;
    case databaseConnection.UPDATE_DATABASE_CONNECTION_SUCCESS:
      draftState.updateSuccess = true;
      break;
  }
}, initialState);

export const getDatabaseConnectionList = (state) =>
  state.databaseConnectionList;

export const getDatabaseTypeList = (state) => state.databaseType;

export const getSaveStatus = (state) => state.saveSuccess;

export const getTestStatus = (state) => state.testSuccess;

export const getDeleteStatus = (state) => state.deleteSuccess;

export const getUpdateStatus = (state) => state.updateSuccess;
