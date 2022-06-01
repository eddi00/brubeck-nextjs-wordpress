// import { createStore, applyMiddleware } from "redux";
// import { persistStore } from "redux-persist";
// import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

// import rootReducer from "./root-reducer";
// import rootSaga from "./root-saga";

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: {} });
