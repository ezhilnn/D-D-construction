import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@store/index';

/**
 * Typed dispatch hook — use this instead of raw useDispatch.
 * Supports saga-triggered actions out of the box.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed selector hook — use this instead of raw useSelector.
 * Automatically knows the shape of RootState.
 */
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);