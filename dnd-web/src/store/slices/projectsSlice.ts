import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProjectsState, Project, ProjectType } from '@/types/index';

const initialState: ProjectsState = {
  items: [],
  loading: false,
  error: null,
  filter: 'all',
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    // Saga triggers
    fetchProjectsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProjectsSuccess(state, action: PayloadAction<Project[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchProjectsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    // UI filters
    setFilter(state, action: PayloadAction<ProjectType | 'all'>) {
      state.filter = action.payload;
    },
  },
});

export const {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsFailure,
  setFilter,
} = projectsSlice.actions;

export default projectsSlice.reducer;