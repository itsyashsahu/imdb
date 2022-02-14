import Head from "next/head";
import Card1 from "../comp/Card1";
import Card2 from "../comp/Card2";
import Header from "../comp/Header";
import Movie from "../utils/movieSchema";
import db from "../utils/db";
import { useRouter, withRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ tenmovies, allmovies }) {
  const [allMovieArr, setAllMovieArr] = useState(allmovies);
  const [selectedSort, setSelectedSort] = useState(0);
  // const router = useRouter();
  const router = useRouter();

  const sortUpvotes = () => {
    let Arr = allmovies.sort((a, b) => (a.Upvotes < b.Upvotes ? 1 : -1));
    setAllMovieArr([...Arr]);
    // console.log(allMovieArr)
  };
  const sortDownvotes = () => {
    let Arr = allmovies.sort((a, b) => (a.Upvotes > b.Upvotes ? 1 : -1));
    setAllMovieArr([...Arr]);
    // console.log(allMovieArr)
  };
  const sortReleasedDate = () => {
    let Arr = allmovies.sort((a, b) => (a.Released < b.Released ? 1 : -1));
    setAllMovieArr([...Arr]);
    // console.log(allMovieArr)
  };

  useEffect(()=>{
    console.log("this is selectedSort",selectedSort)
    switch(selectedSort){
      case "1": sortUpvotes(); break;
      case "2": sortDownvotes(); break;
      case "3": sortReleasedDate(); break;
    } 
  },[selectedSort])


  return (
    <>
      <Head>
        <title>IMDB Movies Rating</title>
      </Head>
      <Header router={router} />

      <div className="flex flex-col bg-white m-auto p-auto">
        <h1 className="flex py-5 lg:px-8 md:px-10 px-5 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-800">
          Top Ten Movies
        </h1>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-10 md:ml-10 ml-14 ">
            {console.log(selectedSort)}
            {tenmovies.map((movie) => {
              // console.log("ten",movie.imdbID)
              return (
                <Card1
                  key={movie.imdbID}
                  poster={movie.Poster}
                  imdbId={movie.imdbID}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between">

        <h1
          onClick={() => {
            console.log("healkjdsh");
            router.push("/search/abc");
          }}
          className="flex lg:px-8 md:px-10 md:px-5 px-2 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-800"
        >
          All Listed Movies
        </h1>
        <div className="flex mt-4 ml-auto sm:mt-0 mr-6 md:mr-12 items-center">
          <span className="mr-3" onClick={sortReleasedDate}>
            Sort By
          </span>
          <div className="relative">
            <select 
              value={selectedSort}
              onChange={(e)=>setSelectedSort(e.target.value)}
              className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
              <option value="0" defaultValue>Select Method</option>
              <option value="1">Upvotes</option>
              <option value="2">Downvotes</option>
              <option value="3">Released Date</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="container my-5 mx-auto px-4 md:px-6">
        <div className="flex flex-wrap -mx-1 lg:-mx-2">

          {/* {allmovies.map((movie) => { */}
          {allMovieArr.map((movie) => {
            // console.log("all",movie.imdbID)
            return (
              <Card2
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                genre={movie.Genre}
                imdbId={movie.imdbID}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  await db.connect();
  let response = await Movie.find({}).sort({ Upvotes: -1 }).limit(10);
  let responseAll = await Movie.find();

  await db.disconnect();
  const tenmovies = JSON.parse(JSON.stringify(response));
  const allmovies = JSON.parse(JSON.stringify(responseAll));

  return {
    props: {
      tenmovies,
      allmovies,
    },
    revalidate: 10,
  };
}
