// this file contains the endpoints to make api-requests to

export const auth = {
  LOGIN: `/api/auth/v1/login`,
  REFRESH_TOKEN: `/api/auth/v1/refreshToken`,
};

export const dataMapping = {
  tableMapping: {
    CONNECTION_LIST: `/api/databaseMapping/showAllConnection`,
    DATA_BY_CONNECTION_ID: `/api/databaseMapping/getTablesByConnectionID`,
    SAVE_DATABASE_MAPPING: `/api/databaseMapping/saveDatabaseMapping`,
  },
  dataMappingList: {
    DATA_MAPPING_LIST: `/api/databaseMapping/showAllMapping`,
    DATA_MAPPING_LIST_DELETE: `/api/databaseMapping/deleteDataMappingById`,
  },
  columnMapping: {
    GET_COLUMNS_BY_MAPPING_ID: `/api/databaseMapping/getColumnByMappingID`,
    GET_COLUMN_MAPPED_BY_MAPPING_ID: `/api/databaseMapping/getColumnMappingByMappingID`,
    SAVE_COLUMN_MAPPING: `/api/databaseMapping/saveDatabaseColumnMapping`,
    UPDATE_COLUMN_MAPPING: `/api/databaseMapping/updateDatabaseColumnMapping`,
    DELELTE_COLUMN_MAPPING: `/api/databaseMapping/deleteDatabaseColumnMapping`,
    SAVE_IN_BULK: `/api/databaseMapping/updateDatabaseColumnMappingBulk`,
  },
  dataPreView: {
    GET_TABLE_DATA: ``,
  },
};
