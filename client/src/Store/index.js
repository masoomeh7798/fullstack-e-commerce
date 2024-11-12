import authSliceReducer from "./Slice/AuthSlice";
import filtersSliceReducer from "./Slice/FiltersSlice";
import { configureStore } from "@reduxjs/toolkit";
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        filters:filtersSliceReducer
    }
})
export default store