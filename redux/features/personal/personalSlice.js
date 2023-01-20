import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchPersonal,
  requestUpdatePersonal,
  requestAddPersonal,
  requestDeletePersonal,
} from "middleware/fetchers/personal";

const namespace = "personal";

export const getPersonal = createAsyncThunk(
  `${namespace}/getPersonal`,
  async ({}, thunkApi) => {
    const { data, error } = await fetchPersonal();
    if (error) {
      return thunkApi.rejectWithValue(error);
    }
    return data;
  }
);

export const updatePersonal = createAsyncThunk(
  `${namespace}/updatePersonal`,
  async ({ body, params, onSuccess }, thunkApi) => {
    const { data, error } = await requestUpdatePersonal(body, params);
    if (data) {
      onSuccess();
    }
    if (error) {
      return thunkApi.rejectWithValue(error);
    }
    return data;
  }
);

export const addPersonal = createAsyncThunk(
  `${namespace}/addPersonal`,
  async ({ body, onSuccess }, thunkApi) => {
    const { data, error } = await requestAddPersonal(body);
    if (data) {
      onSuccess();
    }
    if (error) {
      return thunkApi.rejectWithValue(error);
    }
    return data;
  }
);

export const deletePersonal = createAsyncThunk(
  `${namespace}/deletePersonal`,
  async ({ params, onSuccess }, thunkApi) => {
    const { data, error } = await requestDeletePersonal(params);
    if (data) {
      onSuccess();
    }
    if (error) {
      return thunkApi.rejectWithValue(error);
    }
    return data;
  }
);

export const personalSlice = createSlice({
  name: namespace,
  initialState: {
    personal: [],
    isLoading: false,
    error: null,
    inputValue: "",
    choose: null,
  },
  reducers: {
    clearInput: (state) => {
      state.inputValue = "";
    },
    setInput: (state, action) => {
      state.inputValue = action?.payload;
    },
    setChoose: (state, action) => {
      state.choose = action?.payload;
    },
  },
  extraReducers: {
    // getPersonal
    [getPersonal.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getPersonal.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.personal = payload;
    },
    [getPersonal.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
    // updatePersonal
    [updatePersonal.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [updatePersonal.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
    },
    [updatePersonal.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
    // addPersonal
    [addPersonal.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [addPersonal.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
    },
    [addPersonal.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
    // deletePersonal
    [deletePersonal.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [deletePersonal.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
    },
    [deletePersonal.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
});

export const { clearInput, setInput, setChoose } = personalSlice.actions;

export default personalSlice.reducer;
