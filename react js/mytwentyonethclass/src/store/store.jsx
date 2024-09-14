import { configureStore } from "@reduxjs/toolkit";
import counterReducers from './slices/counterSlice'
import productReducers from './slices/productSlice'
import addToCartReducer from './slices/addToCartSlice'    
import { persistStore, persistReducer } from 'redux-persist'    
import storage from 'redux-persist/lib/storage' 


const persistConfig = {   
    key: 'root',
    storage,  
  }     


const store = configureStore({
    reducer:{
        counterReducers,
        productReducers,
        addToCartReducer:persistReducer(persistConfig,addToCartReducer),    
    }
})

export const persistor = persistStore(store)  
  
export default store;
