import axios from 'axios'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    gender: [],
    loading: false
}

export const fetchAllGenders = createAsyncThunk("genders/getAPI", async () => {
    const response = await axios.get("http://irp.ramanacastle.com/api/gender")
    return response.data.data
});

export const saveNewGender = createAsyncThunk("genders/postApi", async (payload) => {
    const response = await axios.post("https://irp.ramanacastle.com/api/gender/store", payload)
    return response.data
})
export const updateGender = createAsyncThunk("genders/putApi", async (payload) => {
    const response = await axios.post(`http://irp.ramanacastle.com/api/gender/update/${payload}`)
    return response.data
})
export const deleteGender = createAsyncThunk("genders/deleteApi", async (payload) => {
    const response = await axios.delete(`https://irp.ramanacastle.com/api/delete/gender/${payload}`)
    
    return response.data
})
export const genderSlice = createSlice({
    name: "genders",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchAllGenders.fulfilled, (state, action) => {
            state.gender = action.payload
        })
    }
})


export default genderSlice.reducer