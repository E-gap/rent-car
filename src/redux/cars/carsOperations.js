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

export const getFavoriteCars = createAsyncThunk(
  'cars/getFavoriteCars',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue(
        'Sign In if you want to get Favorite Cars'
      );
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { data } = await instance.get('/cars/favorite');

      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getUserCars = createAsyncThunk(
  'cars/getUserCars',
  async (_, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue('Sign In if you want to get Your Cars');
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
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

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (carId, thunkApi) => {
    console.log(carId);
    try {
      const { data } = await instance.delete(`/cars/${carId}`);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
