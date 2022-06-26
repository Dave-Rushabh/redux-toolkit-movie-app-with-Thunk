import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovieOrShowDetail } from "../../features/movies/movieSlice";
import { getSelectedMovieOrShow } from "../../features/movies/movieSlice";
import { AiOutlineCalendar, AiOutlineLike, AiFillStar } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";

const MovieDetail = () => {
  const { title } = useParams();
  console.log(title, "title");
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(title));
  }, [dispatch]);
  return (
    <>
      <div className="movie-section">
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB rating <AiFillStar className="star" /> : {data.imdbRating}
            </span>
            <span>
              IMDB votes <AiOutlineLike className="like" /> : {data.imdbVotes}
            </span>
            <span>
              Runtime <BiCameraMovie className="time" /> : {data.Runtime}
            </span>
            <span>
              Year <AiOutlineCalendar className="year" /> : {data.Year}
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span> Director </span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span> Cast </span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span> Genre </span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span> Languages </span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span> Awards </span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
