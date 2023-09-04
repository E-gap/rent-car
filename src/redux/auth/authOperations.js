import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const register = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/register', userData);
      console.log(data);
      instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const { data } = await instance.post('users/login', userData);
      instance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await instance.post('/users/logout');
    instance.defaults.headers.common.Authorization = ``;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/current', async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  if (!token)
    return thunkApi.rejectWithValue(
      'Sign In if you want to save your score history'
    );
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await instance.get('/users/current');

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const changeFavorite = createAsyncThunk(
  'auth/changeFavorite',
  async (carId, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue(
        'Sign In if you want to add car to Favorite'
      );
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await instance.put('/users/changeFavorite', { carId });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
