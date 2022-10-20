import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'

type currency = {
    id?: string;
    currency: any;
} 

type currencyState = {
    counts: currency[]
}

const initialState: currencyState = {
    counts: []
}

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        getCurrency(state , action: PayloadAction<number[]>) {
            console.log(action, 'action' , state, 'state');
            
            state.counts.push({
                id: new Date().toString(),
                currency: action.payload
            })
        }
    }
})

export default currencySlice.reducer
export const {getCurrency} = currencySlice.actions