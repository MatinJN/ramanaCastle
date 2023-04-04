import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    sizes: [],
    loading: false
}

export const fetchAllsize = createAsyncThunk("size/getAPI", async () => {
    const response = await axios.get("http://irp.ramanacastle.com/api/size")
    return response.data.data
});

export const saveNewSize = createAsyncThunk("size/postApi", async (payload) => {
    const response = await axios.post("https://irp.ramanacastle.com/api/size/store", payload)
    return response.data
})
export const updateSize = createAsyncThunk("genders/putApi", async (payload) => {
    const response = await axios.post(`http://irp.ramanacastle.com/api/size/update/${payload}`)
    return response.data
})
export const deleteSize = createAsyncThunk("genders/deleteApi", async (payload) => {
    const response = await axios.delete(`https://irp.ramanacastle.com/api/delete/size/${payload}`)
    
    return response.data
})
export const sizeSlice = createSlice({
    name: "sizes",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAllsize.fulfilled, (state, action) => {
            state.sizes = action.payload
        })
    }
})


export default sizeSlice.reducer