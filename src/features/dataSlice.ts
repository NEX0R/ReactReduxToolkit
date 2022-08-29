import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ResponseRoot } from "../Types/ApiData";

interface DataState {
    data: ResponseRoot | null,
    loading: boolean,
    error: string
}

const initialState: DataState = {
    data: null,
    loading: false,
    error: ""
}

export const fetchData = createAsyncThunk("fetchData", async () => {
    const response = await axios.get<ResponseRoot>("https://rickandmortyapi.com/api/character");
    return response.data
})

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });
        builder.addCase(fetchData.fulfilled, (state, action: PayloadAction<ResponseRoot>) => {
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = "Error fetching data char."
        })

    }
})

export default dataSlice.reducer;
