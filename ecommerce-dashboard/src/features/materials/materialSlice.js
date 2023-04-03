import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    materials: [],
    loading: false
}

export const fetchAllMaterials = createAsyncThunk("materials/getAPI", async () => {
    const response = await axios.get("http://irp.ramanacastle.com/api/material");

    return response.data.data;
});
export const createMaterials = createAsyncThunk("materials/postAPI", async (payload) => {
    const response = await axios.post("http://irp.ramanacastle.com/api/material/store", payload);

    return response.data.data;
});

export const updateMaterials = createAsyncThunk("materials/putAPI", async (payload) => {
    const response = await axios.post(`http://irp.ramanacastle.com/api/material/update/${payload}`);

    return response.data.data;
});


export const deleteMaterials = createAsyncThunk("materials/putAPI", async (payload) => {
    const response = await axios.delete(`http://irp.ramanacastle.com/api/delete/material/${payload}`);

    return response.data.data;
});
export const materialSlice = createSlice({
    name: "materials",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllMaterials.fulfilled, (state, action) => {
            state.materials = action.payload
            state.loading = true
        })

    }
})


export default materialSlice.reducer