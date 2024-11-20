import { configureStore } from "@reduxjs/toolkit";
import universityPage from "./univerSlice"
import workerPage from "./workerSlice"
const store = configureStore({
    reducer: {
        university:  universityPage,
        workers: workerPage
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
