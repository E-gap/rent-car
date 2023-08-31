import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCars,
  getUserCars,
  addCar,
  getFavoriteCars,
} from './carsOperations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    allCars: [],
    carsByUser: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.allCars = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserCars.fulfilled, (state, action) => {
        state.allCars = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addCar.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCar.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFavoriteCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFavoriteCars.fulfilled, (state, action) => {
        state.allCars = action.payload;
        state.isLoading = false;
      })
      .addCase(getFavoriteCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
