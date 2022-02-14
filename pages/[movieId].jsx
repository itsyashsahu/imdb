import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../comp/Header";
import Head from "next/head";
import loadingsvg from "../comp/loading.svg";
import Image from "next/image";
// import { set } from "mongoose";
import upvoteOutlinedSVG from '../comp/upvoteOutlined.svg';
import upvoteFilledSVG from '../comp/upvoteFilled.svg';
import downvoteOutlinedSVG from '../comp/downvoteOutlined.svg';
import downvoteFilledSVG from '../comp/downvoteFilled.svg';
import littleLoaderSVG from '../comp/littleLoader.svg'

export default function Movie({ ApiKey }) {
  const router = useRouter();
  const [movie, setMovie] = useState({});
  const [Upvotes, setUpvotes] = useState(0);
  const [Downvotes, setDownvotes] = useState(0);
  const [serchLoader, setSearchLoader] = useState(true);

  // const [ hasUserReacted , setHasUserReacted ] = useState("true");
  const [userUpvoted, setUserUpvoted] = useState(false);
  const [userDownvoted, setUserDownvoted] = useState(false);
  const [ litteLoader , setLittleLoader ] = useState(false);

  const [fromSearch, setFromSeatch] = useState(false);
  const movieId = router.query.movieId;

  const checkLocalStorage = (imdbId) =>{
    const savedArr = localStorage.getItem("userReactedMovies");
    savedArr = JSON.parse(savedArr)
    if(savedArr){
      const found = savedArr.find(movie => movie.imdbId === imdbId);
      // console.log(found)
      if(found){
        if(found.vote===1){
          setUserUpvoted(true)
        }else{
          setUserDownvoted(true)
        }
      }

    }
  }

  const setLocalStorage = (imdbId,vote)=>{
    // getting the Arr if saved 
    const savedArr = localStorage.getItem("userReactedMovies");
    // console.log("set called ",savedArr)
    if(!savedArr){
      const saveArr = [
        {
          imdbId,
          vote
        }
      ]
      localStorage.setItem('userReactedMovies', JSON.stringify(saveArr));
    }else{
      // console.log("he")
      savedArr = JSON.parse(savedArr)
      const found = savedArr.find(movie => movie.imdbId === imdbId);
      console.log(found)
      if(found){
        return
      }else{

        const saveArr = [
          ...savedArr,
          {
            imdbId,
            vote
          }
        ]
        // console.log("to be saved",saveArr)
        localStorage.setItem('userReactedMovies', JSON.stringify(saveArr));
      }
    }
  }

  const getMovieFromApi = async () => {
    await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=${ApiKey}`)
      .then(async function (res) {
        const response = await res.json();
        // setResults(response.Search);
        setSearchLoader(false);
        setMovie(response);
        setFromSeatch(true);
        // console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

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
        // console.log(response.length);
        // implement the logic if response has length 0
        if (response.length > 0) {
          setMovie(response[0]);
          setSearchLoader(false);
          setUpvotes(+response[0]?.Upvotes);
          setDownvotes(+response[0]?.Downvotes);
          // checkLocalStorage(movieId);
          // setLocalStorage(movieId,1);

        } else {
          getMovieFromApi();
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovie();
    checkLocalStorage(movieId);
  }, [movieId]);

  const isoToDate = (iso) => {
    let date = new Date(iso);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    let result = dt + "-" + month + "-" + year;
    return result;
  };

  const upvote = async () => {
    if(userDownvoted){
      return;
    }
    var movieData;
    if (!fromSearch) {
      movieData = {
        movieId,
      };
    } else {
      movieData = {
        ...movie,
      };
      // console.log("search se ho",movieData)
    }
    setLittleLoader(true);
    await fetch("/api/upvote/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ movieData, fromSearch }),
    })
      .then(async function (res) {
        const response = await res.json();
        // console.log(response)
        setUserUpvoted(true);
        setLittleLoader(false);
        setUpvotes(++Upvotes);
        setLocalStorage(movieId,1);

      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const downvote = async () => {
    if(userUpvoted){
      return;
    }
    var movieData;
    if (!fromSearch) {
      movieData = {
        movieId,
      };
    } else {
      movieData = {
        ...movie,
      };
      // console.log("search se ho",movieData)
    }

    setLittleLoader(true);
    await fetch("/api/downvote/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ movieData, fromSearch }),
    })
      .then(async function (res) {
        // const response = await res.json();
        setDownvotes(++Downvotes);
        setLittleLoader(false);
        setUserDownvoted(true)
        setLocalStorage(movieId,-1);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <Head>
        <title>Movie : {movie?.Title}</title>
      </Head>
      <Header />
      {serchLoader ? (
        <div className="bg-gray-800 h-screen flex justify-center items-center">
          <Image src={loadingsvg} />
        </div>
      ) : (
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
                    <span className="text-gray-600">
                      Genre : {movie?.Genre}
                    </span>
                  </span>
                  <span className="flex ml-3 pl-3 py-0 border-l-2 border-gray-200 space-x-2s">
                    <span className="text-gray-600 ml-3">
                      Year : {movie?.Year}
                    </span>
                  </span>
                </div>
                <p className="leading-relaxed pb-5">
                  <span className="text-gray-600">
                    Released On : {movie ? isoToDate(movie.Released) : null}
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Runtime : {movie?.Runtime}
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Directors : {movie?.Director}
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Actors : {movie?.Actors}
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Writers : {movie?.Writer}
                  </span>
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
                  <span className="flex items-center title-font font-medium md:text-2xl text-xl text-gray-900">
                    Upvotes : {Upvotes} &nbsp;
                    {
                      (litteLoader)?
                      <button className="flex h-7 w-8 ">
                        <Image src={littleLoaderSVG} />
                      </button>
                      :
                    (userUpvoted) ? (
                      <button className="flex" >
                        <Image src={upvoteFilledSVG} />
                      </button>
                    ) : (
                      <button className="flex" onClick={upvote}>
                        <Image src={upvoteOutlinedSVG} />
                      </button>
                    )
                    }
                  </span>

                  <span className="flex items-center title-font font-medium md:text-2xl text-xl text-gray-900">
                    Downvotes : {Downvotes} &nbsp;

                    {
                      (litteLoader)?
                      <button className="flex h-7 w-8 ">
                        <Image src={littleLoaderSVG} />
                      </button>
                      :
                    (userDownvoted) ? (
                      <button className="flex">
                        <Image src={downvoteFilledSVG} />
                      </button>
                    ) : (
                      <button className="flex" onClick={downvote}>
                        <Image src={downvoteOutlinedSVG} />
                      </button>
                    )
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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
