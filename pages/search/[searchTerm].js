import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../comp/Header";
import Card2 from "../../comp/Card2";
import Head from "next/head";
<<<<<<< HEAD
import loadingsvg from '../../comp/loading.svg'
import Image from "next/image";

=======
>>>>>>> 3dd58ea8ba7508b275d4445d840c6c5f6b71aea5

export default function SearchHandler({ ApiKey }) {
  const router = useRouter();
  const searchTerm = router.query.searchTerm;
  const [ Results , setResults ] = useState([]);
<<<<<<< HEAD
  const [ serchLoader , setSearchLoader ] = useState(true)

=======
>>>>>>> 3dd58ea8ba7508b275d4445d840c6c5f6b71aea5
  // http://www.omdbapi.com/?s=Batman&page=2&apikey=ce4796de
  // const ApiKey = process.env.API_KEY;
  // console.log(ApiKey)
  const SearchMovies = async () => {
    await fetch(`https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${ApiKey}`)
      .then(async function (res) {
        const response = await res.json();
        setResults(response.Search);
<<<<<<< HEAD
        setSearchLoader(false)
=======
>>>>>>> 3dd58ea8ba7508b275d4445d840c6c5f6b71aea5
        console.log(response);
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  useEffect(() => {
    SearchMovies();
  }, [searchTerm]);

  return (
    <>
      <Head>
        <title>{`Search Results - ${searchTerm} `}</title>
      </Head>
<<<<<<< HEAD
      <Header setSearchLoader={setSearchLoader} />
      {
        (serchLoader)?
        <div className="bg-gray-800 h-screen flex flex-col justify-center items-center" >
          <Image src={loadingsvg} />
          {/* <div className="text-xl text-white mt-4" >Hello World</div> */}
        </div>
        :
        <>
        <div className="flex justify-between mt-8">
          <h1 
          onClick={()=>{ console.log("healkjdsh");  router.push("/search/abc")}}
          className="flex lg:px-8 md:px-10 px-5 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-800">
            Search Results - {searchTerm}
          </h1>
        </div>

        <div className="container my-5 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {Results?.map((movie) => {
              // console.log("all",movie.imdbID)
              return (
                  <Card2
                    key={movie.imdbID}
                    poster={movie.Poster}
                    title={movie.Title}
                    genre={movie.Type}
                    imdbId={movie.imdbID}
                  />
              );
            })}
          </div>
        </div>
        </>
      }
=======
      <Header />
      <div className="flex justify-between mt-8">
        <h1 
        onClick={()=>{ console.log("healkjdsh");  router.push("/search/abc")}}
        className="flex lg:px-8 md:px-10 px-5 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-800">
          Search Results - {searchTerm}
        </h1>
      </div>

      <div className="container my-5 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {Results?.map((movie) => {
            // console.log("all",movie.imdbID)
            return (
                <Card2
                  key={movie.imdbID}
                  poster={movie.Poster}
                  title={movie.Title}
                  genre={movie.Type}
                  imdbId={movie.imdbID}
                />
            );
          })}
        </div>
      </div>
>>>>>>> 3dd58ea8ba7508b275d4445d840c6c5f6b71aea5
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
