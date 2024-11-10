import authSliceReducer from "./Slice/AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
    
    }
})
export default store