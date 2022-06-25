import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const search = "Harry";
    const type = "movie";
    const fetchMovies = async () => {
      const response = await axios
        .get(
          `https://www.omdbapi.com/?i=tt3896198&apikey=1e7c311e&s=${search}&type=${type}`
        )
        .then((resp) => {
          dispatch(addMovies(resp.data));
        })
        .catch((error) => {
          console.error("Error :", error);
        });
    };

    fetchMovies();
  }, []);
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
