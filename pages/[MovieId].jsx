import React, { useEffect,useState } from "react";
import { useRouter } from "next/router";
import Header from "../comp/Header";
import Head from "next/head";


export default function Movie({ApiKey}) {
  const router = useRouter();
  const [movie,setMovie ] = useState({});
  const [ Upvotes , setUpvotes ] = useState(0);
  const [ Downvotes , setDownvotes ] = useState(0);
  
  const [ fromSearch , setFromSeatch ] = useState(false);
  const movieId = router.query.MovieId;

  const getMovieFromApi = async () => {
    await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=${ApiKey}`)
      .then(async function (res) {
        const response = await res.json();
        // setResults(response.Search);
        setMovie(response);
        setFromSeatch(true);
        // setUpvotes( +response?.Upvotes)
        // setDownvotes( +response?.Downvotes)
        console.log(response);
      })
      .catch(function (res) {
        console.log(res);
      });
  }

  const getMovie = async () => {
    await fetch("/api/movie/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ movieId }),
    })
      .then(async function (res) {
        const response = await res.json();
        console.log(response.length);
        // implement the logic if response has length 0 
        if( response.length > 0 ){
          setMovie(response[0]);
          setUpvotes( +response[0]?.Upvotes)
          setDownvotes( +response[0]?.Downvotes)
        }else{
          getMovieFromApi();
        }
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  useEffect(() => {
    getMovie();
  }, [movieId]);
  const isoToDate = (iso) => {
    let date = new Date(iso);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    let result = dt+'-' + month + '-'+year;
    return result;
  }

  const upvote = async () =>{
    var movieData;
    if( !fromSearch ){
      movieData={
        movieId
      }
    }else{
      movieData={
        ...movie
      }
      // console.log("search se ho",movieData)
    }
    await fetch("/api/upvote/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ movieData ,fromSearch }),
    })
      .then(async function (res) {
        const response = await res.json();
        // console.log(response)
        setUpvotes( ++Upvotes)
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  
  const downvote = async () =>{
    var movieData;
    if( !fromSearch ){
      movieData={
        movieId
      }
    }else{
      movieData={
        ...movie
      }
      // console.log("search se ho",movieData)
    }

    await fetch("/api/downvote/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ movieData ,fromSearch }),
    })
      .then(async function (res) {
        // const response = await res.json();
        setDownvotes( ++Downvotes)
      })
      .catch(function (res) {
        console.log(res);
      });
  }

  return (
    <>
      <Head>
        <title>Movie : {movie?.Title}</title>
      </Head>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden h-4/6">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            <div className="w-96 h-[30rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="h-full w-full"
                src={movie?.Poster}
                // src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {movie?.Title}
              </h1>
              <div className="flex mb-4 mr-4">
                <span className="flex items-center mr-4">
                  <span className="text-gray-600">Genre : {movie?.Genre}</span>
                </span>
                <span className="flex ml-3 pl-3 py-0 border-l-2 border-gray-200 space-x-2s">
                  <span className="text-gray-600 ml-3">Year : {movie?.Year}</span>
                </span>
              </div>
              <p className="leading-relaxed pb-5">
                <span className="text-gray-600">Released On : {movie?isoToDate(movie.Released):null}</span>
                <br />
                <span className="text-gray-600">Runtime : {movie?.Runtime}</span>
                <br />
                <span className="text-gray-600">
                  Directors : {movie?.Director}
                </span>
                <br />
                <span className="text-gray-600">Actors : {movie?.Actors}</span>
                <br />
                <span className="text-gray-600">Writers : {movie?.Writer}</span>
                <br />
                <span className="text-gray-600">
                  Languages : {movie?.Language}
                </span>
                <br />
                <br />
                {/* plot */}
                {movie?.Plot}
              </p>
              <div className="flex justify-between pt-2 border-t-2 border-gray-100 ">
                <span className="flex items-center title-font font-medium text-2xl text-gray-900">
                  Upvotes : {Upvotes} &nbsp;
                  <button
                    onClick={upvote}
                    >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z" />
                    </svg>
                  </button>
                </span>
                <span className="flex items-center title-font font-medium text-2xl text-gray-900">
                  Downvotes : {Downvotes} &nbsp;
                  <button
                    onClick={downvote}
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059zM12 19.399 6.081 12H10V4h4v8h3.919L12 19.399z" />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export async function getServerSideProps(context) {
  // console.log("(Re-)Generating...the api key");
  const key = process.env.API_KEY;
  // console.log("sd", key);

  return {
    props: {
      ApiKey: key,
    },
  };
}
