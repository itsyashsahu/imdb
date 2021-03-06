import Link from "next/link";
import React from "react";

export default function Card2({poster , title ,genre ,imdbId}) {
  // console.log(poster)
  // let iii={`relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url( ${poster} )]`};
  // console.log(poster)
  return (
    <>
      <div className="relative h-[36rem] active:translate-y-1 my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 md:h-[26rem] ">
      <Link href={`/${imdbId}`}>
        {/* <div className="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]"> */}
        <div className="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group " style={{backgroundImage:`url(${poster})`}}>
          <div className="bg-black bg-opacity-20 px-10 h-full  flex flex-wrap pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
            <p className="opacity-0 text-white text-xl mb-0 w-full group-hover:opacity-80 transform  -translate-y-20 duration-500">
              {title}<br/>
            </p>
            <br/>
            <div className="w-16 h-2 bg-red-500 rounded-full mt-2 hidden md:block  group-hover:opacity-80 transform translate-y-20 group-hover:-translate-y-20 duration-300"></div>
            <br/>
            <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform w-full -translate-y-0 group-hover:-translate-y-20 duration-500">
              {genre}
            </p>
          </div>
        </div>
      </Link>
      </div>
    </>
  );
}
