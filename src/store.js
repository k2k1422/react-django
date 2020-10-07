import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/es/storage";
import { createFilter } from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";
import { routerMiddleware } from "connected-react-router";
// import { apiMiddleware } from "redux-api-middleware"

import {
  setRequestHeader as setRequestHeaderMiddleware,
  apiMiddleware,
  responseStatus,
  autoSignOut,
} from "./middlewares";

import rootReducer from "./reducers";

export default (history) => {
  const persistFilter = createFilter();

  const reducer = persistReducer(
    {
      key: "mom",
      storage: storage,
      whitelist: ["auth", "permissions", "dataMapping"],
      transforms: [persistFilter],
    },
    rootReducer(history)
  );

  const store = createStore(
    reducer,
    {},
    composeWithDevTools({ trace: true, traceLimit: 25 })(
      applyMiddleware(
        setRequestHeaderMiddleware,
        apiMiddleware,
        responseStatus,
        autoSignOut,
        routerMiddleware(history)
      )
    )
  );
  persistStore(store);
  return store;
};
