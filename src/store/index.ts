import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import baseSlice from "../features/baseSlice";
import dataSlice from "../features/dataSlice";

const store = configureStore({
    reducer: {
        dataApi:dataSlice,
        base:baseSlice
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;