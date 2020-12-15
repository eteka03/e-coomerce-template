import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persist_store = persistStore(store);

export { store, persist_store };
