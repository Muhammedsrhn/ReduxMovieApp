/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import GetMovieList from "../redux/GetMovieList";
import "../App.css";
import { useState } from "react";
import { setSearch } from "../redux/MovieSlice";
import Typical from "react-typical";

const MovieList = () => {
    const dispatch = useDispatch();
    const [search, setSear] = useState("");
    const startSearch = (e) => {
        dispatch(setSearch(search));
    }
    const movies = useSelector((state) => state.movie.movieList);

    return (
        <>
            <GetMovieList />

            <div className="header">
                <div className="title">
                    MovieApp
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter a movie" onChange={(e) => setSear(e.target.value)} onKeyPress={(e) => startSearch(e.code)} />
                </div>
            </div>
            <div className="movies">
                {
                    movies ? movies.map((movie, key) =>
                        <div className="card" key={key}>
                            <div className="card-title">
                                <span>{movie.Title}</span>
                            </div>
                            <div className="card-body">
                                <img src={movie.Poster} alt="" />
                            </div>
                            <div className="card-footer">
                                <span>Year {movie.Year}</span>
                            </div>
                        </div>
                    )
                        : <h1 style={{ marginTop: "200px" }}>
                            <Typical
                                steps={['No match movies', 1500, 'Please try again', 500]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h1>
                }
            </div>
        </>
    )
}

export default MovieList;