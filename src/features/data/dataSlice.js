import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = "https://gist.githubusercontent.com/MatthewBaygin/7fb9b4bf245f545765ee323fefa5d9ef/raw/1505ef6d8e00c183047ef8a1cfd88620827f0e37/timezones.json"

const initialState = {
    value: [],
    status: 'idle',
    error: null
};
export const fetchData = createAsyncThunk('data/fetchTimezone', async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
})
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Add any fetched posts to the array
                state.value = state.value.concat(action.payload)
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
});

export const getData = (state) => state.data.value;


export default dataSlice.reducer;
