import { configureStore, combineReducers } from "@reduxjs/toolkit";
import currencySlice from "./currencySlice";
import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation";


const rootReducer = combineReducers({
    currency: currencySlice,
})

export const store = configureStore ({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch