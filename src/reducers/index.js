import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import auth from "./auth";
import persist from "./persist";
import databaseConnection from "./databaseConnection";
import alert from "./alert";
import dataMapping from "./dataMapping";
import dataMappingList from "./dataMappingList";

export default (history) =>
  combineReducers({
    alert: alert,
    auth: auth,
    persist: persist,
    databaseConnection: databaseConnection,
    router: connectRouter(history),
    dataMapping: dataMapping,
    dataMappingList: dataMappingList,
  });
