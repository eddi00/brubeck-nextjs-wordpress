import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
//import rootSaga from "./root-saga";

//const sagaMiddleware = createSagaMiddleware();

//const middlewares = [sagaMiddleware];

const middlewares = [];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

export const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV !== "production",

  middleware: [...middlewares],
});

export const persistor = persistStore(store);

//sagaMiddleware.run(rootSaga);
