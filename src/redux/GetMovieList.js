/* eslint-disable */
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { setMovie } from "./MovieSlice";


const GetMovieList = () => {
    const dispatch = useDispatch();
    const searcKey = useSelector((state) => state.movie.searcKey)

    async function getData() {
        if (searcKey.length > 0) {
            let requests = await fetch(`https://www.omdbapi.com/?s=${searcKey}&apikey=bbb97269`);
            let response = await requests.json();
            console.log(response.Search)
            dispatch(setMovie(response.Search))
        }
    }
   
    document.addEventListener("DOMContentLoaded",()=>{
        getData()
    })

    onkeypress =(e)=> {
        if(e.code === "Enter"){
            getData();
        }
    }


    return (
        <>

        </>
    )
}

export default GetMovieList;