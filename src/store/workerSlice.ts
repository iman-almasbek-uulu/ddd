import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Worker, WorkerState } from "./types";
import axios from "axios";


export const readWorkers = createAsyncThunk<Worker[]>(
    "workers/readWorkers",
    async(_,{rejectWithValue}) => {
        try {
            const response = await axios.get("https://65ed686c0ddee626c9b197ce.mockapi.io/study")
            return response.data
        }catch(error: any) {
            return rejectWithValue(error.message)
        }
    }
)

const initialState: WorkerState = {
    workers: [],
    status: null,
    error: null
}

const workerSlice = createSlice({
    name: "workers",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(readWorkers.pending, (state) => {
                state.status = "loading"
            })
            .addCase(readWorkers.fulfilled, (state, action) => {
                state.status = "fulfilled"
                state.workers = action.payload
            })
            .addCase(readWorkers.rejected, (state,action) => {
                state.status = "rejected"
                state.error = action.payload
            })
    },
})


export default workerSlice.reducer




