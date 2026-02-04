import type { Middleware } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

/**
 * Simple logger middleware for Redux.
 * Logs: action type, payload, and new state after action.
 */
export const loggerMiddleware: Middleware<{}, RootState> = (store) => (next) => (action: any) => {
  console.group(`🔷 Action: ${action.type}`);
  console.log('Payload:', action.payload);
  const result = next(action);
  console.log('New State:', store.getState());
  console.groupEnd();
  return result;
};