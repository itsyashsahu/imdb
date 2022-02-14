import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../comp/Header";
import Card2 from "../../comp/Card2";
import Head from "next/head";
import loadingsvg from "../../comp/loading.svg";
import Image from "next/image";
import ErrorSVG from "../../comp/Error.svg";

export default function SearchHandler({ ApiKey }) {
  const router = useRouter();
  const searchTerm = router.query.searchTerm;
  const [Results, setResults] = useState([]);
  const [serchLoader, setSearchLoader] = useState(true);
  const [error, setError] = useState(false);

  // http://www.omdbapi.com/?s=Batman&page=2&apikey=ce4796de
  // const ApiKey = process.env.API_KEY;
  // console.log(ApiKey)
  const SearchMovies = async () => {
    setError(false);
    await fetch(
      `https://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=${ApiKey}`
    )
      .then(async function (res) {
        const response = await res.json();
        setResults(response.Search);
        setSearchLoader(false);

        // console.log(response);
        if (response.Response === "False") {
          // console.log("error happended")
          setError(true);
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    SearchMovies();
  }, [searchTerm]);

  return (
    <div className="h-screen  max-h-fit" >
      <Head>
        <title>{`Search Results - ${searchTerm} `}</title>
      </Head>
      <Header setSearchLoader={setSearchLoader} />
      {error ? (
        <div className=" flex flex-col h-[92%] justify-center items-center ">
          {/* <h1 className="flex lg:px-8 pt-10 md:px-10 px-5 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-900">
            Search Results - {searchTerm}
          </h1> */}
          {/* <div className="border mx-10 rounded-3xl items-center transition-shadow duration-300 ease-in-out hover:shadow-xl bg-gradient-to-br from-gray-600 to-gray-600 via-gray-700  "> */}
          <div className="border mx-10 rounded-3xl items-center transition-shadow duration-300 ease-in-out hover:shadow-xl bg-gradient-to-br from-gray-300 to-gray-300 via-gray-400  ">

            <div className="flex justify-center h-80 w-full">
              <Image src={ErrorSVG} className="w-32 h-32" alt="Error Occured" />
            </div>
            <div className="flex flex-col lg:px-8 pt-10 md:px-10 px-5 justify-center -translate-y-20 font-bold text-3xl sm:text-4xl text-center text-black" >
              <h1 >
                No results Found
              </h1>
              <p className="text-lg pt-4" > Please Check for typo error</p>
            </div>

          </div>

        </div>
      ) : (
        <>
          {serchLoader ? (
            <div className="bg-gray-800 h-screen flex flex-col  justify-center items-center">
              <Image src={loadingsvg} />
              {/* <div className="text-xl text-white mt-4" >Hello World</div> */}
            </div>
          ) : (
            <div className=" h-full overflow-auto " >
              <div className="flex justify-between ">
                <h1
                  onClick={() => {
                    // console.log("healkjdsh");
                    router.push("/search/abc");
                  }}
                  className="flex lg:px-8 md:px-10 px-5 mt-8 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-black"
                >
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
            </div>
          )}
        </>
      )}
    </div>
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
