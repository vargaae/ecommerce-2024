import { configureStore } from "@reduxjs/toolkit";
// import { compose, createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [
  import.meta.env.NODE_ENV === "development" && logger,
].filter(Boolean);

// const composeEnhancer =
//   // eslint-disable-next-line no-undef
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composedEnhancers = compose(applyMiddleware(...middleWares));
// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// export const persistor = persistStore(store);
