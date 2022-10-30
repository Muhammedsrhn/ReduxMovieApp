import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        movieList: [],
        searcKey: "",
    },
    reducers: {
        setMovie: (state, action) => {
            state.movieList = action.payload;
        },
        setSearch: (state, action) => {
            state.searcKey = action.payload;
        }
    }
})

export const { setMovie,setSearch } = MovieSlice.actions;
export default MovieSlice.reducer;