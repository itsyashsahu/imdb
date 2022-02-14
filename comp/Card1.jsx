import Link from "next/link";
import React from "react";

export default function Card1({poster ,imdbId }) {
  return (
    <>
      <div className="inline-block px-3 active:translate-y-1">
        <Link href={`/${imdbId}`} >
        <div className="w-64 h-72 max-w-xs cursor-pointer overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <img
            className="h-full w-full"
            src={poster}
            // src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
            />
        </div>
        </Link>
      </div>
    </>
  );
}
