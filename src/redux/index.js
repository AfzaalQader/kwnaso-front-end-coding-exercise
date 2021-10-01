import { applyMiddleware, createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './combinedReducer';
const middleWare = [thunk];

// This is to persist the redux for some specific data,
const persistConfig = {
  key: 'root', // key is required
  storage, // storage is now required
  whitelist: [],
};
const persist = persistReducer(
  persistConfig,
  combineReducers({
    getAllTaskReducer: rootReducer.getAllTaskReducer,
  })
);

const store = createStore(persist, applyMiddleware(...middleWare));
let persistor = persistStore(store);

global.store = store;

export { store, persistor };
