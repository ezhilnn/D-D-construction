import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { NavState } from '@/types/index';

const initialState: NavState = {
  isMenuOpen: false,
  activeLink: 'home',
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    openMenu(state) {
      state.isMenuOpen = true;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload;
    },
  },
});

export const { openMenu, closeMenu, toggleMenu, setActiveLink } = navSlice.actions;
export default navSlice.reducer;