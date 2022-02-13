import React, { useState } from "react";
import { useRouter } from "next/router";


export default function Header({setSearchLoader }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const search = (e) => {
    e.preventDefault();
    // router.push("search/abc");
    if(router.query.searchTerm ){
      router.push(`${searchTerm}`)
      setSearchLoader(true)
    }else{
      router.push(`search/${searchTerm}`)

    }
    console.log(searchTerm);
  };
  return (
    <>
      <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 z-40">
        <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div className="relative items-center pl-1 flex  w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div className="relative p-1 flex items-center justify-start w-full ml-5 mr-4 sm:mr-0 sm:right-auto">
              <a href="/"  className="block relative text-xl text-white">
                IMDB Movie Rating Website
              </a>
            </div>
            <div className="container relative z-50 flex justify-end mr-auto h-auto h-full">
              <form onSubmit={search}>
                <div className="relative flex items-center w-full lg:w-64 h-full group">
                  {/* this is cross svg */}
                  <div className="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                    <svg
                      fill="none"
                      className="relative w-5 h-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>

                  <svg
                    onClick={search}
                    className="absolute right-5 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={searchTerm}
                    className="block w-full py-1.5 pl-8 pr-2 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
