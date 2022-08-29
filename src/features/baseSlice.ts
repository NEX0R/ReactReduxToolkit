import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResultChar } from "../Types/ApiData";

const initialState: ResultChar[] = [];

const baseSlice = createSlice({
    name: "base",
    initialState,
    reducers: {
        setFav: (state, action: PayloadAction<ResultChar>) => {
            const newFav = action.payload;
            const favChar = state.find(item => item.id === newFav.id);
            if (favChar != null)
                state.map((item, index) => (
                    state.splice(state.findIndex(x => x.id === item.id), 1)
                ))
            else
                state.push(newFav);

            return state;

        },
        remove: () => { },
        getFav: (state, action) => {
            return state;
        }
    }
})

export default baseSlice.reducer;
export const { setFav, remove, getFav } = baseSlice.actions;