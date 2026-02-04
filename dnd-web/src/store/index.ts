import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import navReducer from '@store/slices/navSlice';
import projectsReducer from '@store/slices/projectsSlice';
import contactReducer from '@store/slices/contactSlice';
import rootSaga from '@store/sagas/rootSaga';
import { loggerMiddleware } from '@store/middleware';
import type { RootState } from '@/types';

// ─── Create Saga Middleware ───────────────────
const sagaMiddleware = createSagaMiddleware();

// ─── Configure Store ──────────────────────────
const store = configureStore({
  reducer: {
    nav: navReducer,
    projects: projectsReducer,
    contact: contactReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, loggerMiddleware),
});

// ─── Run Root Saga ────────────────────────────
sagaMiddleware.run(rootSaga);

// ─── Typed Dispatch (for use in hooks) ───────
export type AppDispatch = typeof store.dispatch;

// ─── Re-export RootState so hooks can use it ─
export type { RootState };

export default store;