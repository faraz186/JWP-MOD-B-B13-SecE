import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products:[],
    isLoading:false,
    isError:false
}

const counterSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading = true
            state.isError = false
            state.products = []
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.products = action.payload

        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = action.payload
            state.products=[]
        })

    }
})

export const fetchData = createAsyncThunk('products/fetch',async(_,{rejectWithValue})=>{
    try {
        const response = await axios('https://fakestoreapi.com/products');
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const {actions,reducer} = counterSlice;

export default reducer;