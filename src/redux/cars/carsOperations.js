import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/authOperations';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/cars');

      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserCars = createAsyncThunk(
  'cars/getUserCars',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/cars/user');
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCar = createAsyncThunk(
  'cars/addCar',
  async (dataCar, thunkApi) => {
    try {
      const { data } = await instance.post('/cars', dataCar);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
