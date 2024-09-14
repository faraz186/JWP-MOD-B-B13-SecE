import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    addtoCart:[],
    isLoading:false,
    isError:false
}

const addToCartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            state.addtoCart.push(action.payload)  
        },
        removeSingleCart : (state,action)=>{
            state.addtoCart = state.addtoCart.filter(item=>item.id!==action.payload.id)
        }
        
    }
})


const {actions,reducer} = addToCartSlice;

export const {addtoCart,removeSingleCart} = actions;

export default reducer;
