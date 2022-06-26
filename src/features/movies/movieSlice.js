import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const searchMovie = "Harry";
    const type = "movie";
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=1e7c311e&s=${searchMovie}&type=${type}`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const searchShow = "Friends";
    const type = "series";
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=1e7c311e&s=${searchShow}&type=${type}`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (title) => {
    console.log(title, "title in async");
    const response = await axios.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=1e7c311e&t=${title}&plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Response Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Response Fulfilled");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Response Rejected");
    },

    [fetchAsyncShows.pending]: () => {
      console.log("Response Pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Response Fulfilled");
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Response Rejected");
    },

    [fetchAsyncMovieOrShowDetail.pending]: () => {
      console.log("Response Pending");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Response Fulfilled");
      return { ...state, selectedMovieOrShow: payload };
    },
    [fetchAsyncMovieOrShowDetail.rejected]: () => {
      console.log("Response Rejected");
    },
  },
});

export default movieSlice.reducer;
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movieReducer.movies; // state > then name of reducer defined in store.js file > name of state
export const getAllShows = (state) => state.movieReducer.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movieReducer.selectedMovieOrShow;
