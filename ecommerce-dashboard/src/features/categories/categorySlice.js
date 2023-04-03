import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  loading: false,
};

export const fetchAllCategories = createAsyncThunk(
  "categories/getAPI",
  async () => {
    const response = await axios.get(
      "http://irp.ramanacastle.com/api/categroy"
    );

    return response.data.data;
  }
);

export const saveNewCategory = createAsyncThunk(
  "categories/postApi",
  async (payload) => {
    const response = await axios.post(
      "http://irp.ramanacastle.com/api/categroy/store",
      payload
    );
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/putApi",
  async (payload) => {const response = await axios.post(`http://irp.ramanacastle.com/api/categroy/update/${payload}`);
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteApi",
  async (payload) => {
    const response = await axios.post(`http://irp.ramanacastle.com/api/categroy/update/${payload}`);
    return response.data;
  }
);
export const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state, action) => {
        state.categories = action.payload;
        state.loading = true;
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        // state.loading = false
      })
      .addCase(saveNewCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveNewCategory.fulfilled, (state) => {
        state.loading = false;
      });
  },
});


export default categorySlice.reducer;
