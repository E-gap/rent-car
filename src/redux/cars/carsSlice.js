import { createSlice } from '@reduxjs/toolkit';
import { addCar, getFavoriteCars, deleteCar } from './carsOperations';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {    
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
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
