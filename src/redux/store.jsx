
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from './auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  version: 1,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(
//   persistConfig,
//   combineReducers({ contacts: contactsReducer, filter: filterReducer })
// );

export const store = configureStore({
  reducer:  { auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
