import { createSlice } from '@reduxjs/toolkit';
import {
  addCar,
  deleteCar,
  getAllCars,
  getFavoriteCars,
  getUserCars,
  changeCar,
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
      .addCase(addCar.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changeCar.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changeCar.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(changeCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCar.pending, state => {
        state.error = null;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.allCars = action.payload;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const carsReducer = carsSlice.reducer;
