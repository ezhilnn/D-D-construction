import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ContactState, ContactFormData } from '@/types/index';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  companyInterest: 'dnd-construction',
};

const initialState: ContactState = {
  formData: initialFormData,
  isSubmitting: false,
  submitStatus: 'idle',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // Form field updates
    updateField(state, action: PayloadAction<{ field: keyof ContactFormData; value: string }>) {
      const { field, value } = action.payload;
      (state.formData as Record<string, string>)[field] = value;
    },
    // Saga triggers
    submitFormRequest(state) {
      state.isSubmitting = true;
      state.submitStatus = 'idle';
    },
    submitFormSuccess(state) {
      state.isSubmitting = false;
      state.submitStatus = 'success';
      state.formData = initialFormData;
    },
    submitFormFailure(state) {
      state.isSubmitting = false;
      state.submitStatus = 'error';
    },
    // Reset
    resetForm(state) {
      state.formData = initialFormData;
      state.submitStatus = 'idle';
    },
  },
});

export const {
  updateField,
  submitFormRequest,
  submitFormSuccess,
  submitFormFailure,
  resetForm,
} = contactSlice.actions;

export default contactSlice.reducer;