import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/authOperations';

/* export const getAllCars = async () => {
  try {
    const { data } = await instance.get('/cars');
    return data;
  } catch (error) {
    return error;
  }
}; */

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (search, thunkApi) => {
    try {
      const { data } = await instance.get(search ? `/cars${search}` : `/cars`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getOneCar = async carId => {
  try {
    const { data } = await instance.get(`/cars/${carId}`);
    return data;
  } catch (error) {
    return error;
  }
};

/* export const getOneCar = createAsyncThunk(
  'cars/getOneCar',
  async (carId, thunkApi) => {
    try {
      const { data } = await instance.get(`/cars/${carId}`);

      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
); */

export const getFavoriteCars = createAsyncThunk(
  'cars/getFavoriteCars',
  async (search, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue(
        'Sign In if you want to get Favorite Cars'
      );
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { data } = await instance.get(
        search ? `/cars/favorite${search}` : `/cars/favorite`
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

/* export const getFavoriteCars = async () => {
  try {
    const { data } = await instance.get('/cars/favorite');
    return data;
  } catch (error) {
    return error;
  }
}; */

export const getUserCars = createAsyncThunk(
  'cars/getUserCars',
  async (search, thunkApi) => {
    const { token } = thunkApi.getState().auth;

    if (!token)
      return thunkApi.rejectWithValue('Sign In if you want to get Your Cars');
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await instance.get(
        search ? `/cars/user${search}` : `/cars/user`
      );
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

/* export const getUserCars = async () => {
  try {
    const { data } = await instance.get('/cars/user');
    return data;
  } catch (error) {
    return error;
  }
}; */

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

export const changeCar = createAsyncThunk(
  'cars/changeCar',
  async (reqBody, thunkApi) => {
    const { dataCar, carId } = reqBody;

    try {
      const { data } = await instance.patch(`/cars/${carId}`, dataCar);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (carId, thunkApi) => {
    try {
      const { data } = await instance.delete(`/cars/${carId}`);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
