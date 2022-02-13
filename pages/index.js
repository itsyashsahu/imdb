import Head from "next/head";
import Image from "next/image";
import Header from "../comp/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header/>

      <div class="flex flex-col bg-white m-auto p-auto">
        <h1 class="flex py-5 lg:px-8 md:px-10 px-5 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-800">
          Top Ten Movies
        </h1>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap lg:ml-10 md:ml-10 ml-14 ">
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
            <div class="inline-block px-3">
              <div class="w-64 h-72 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img class="h-full w-full" src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="flex lg:px-8 md:px-10 px-5 lg:mx-16 md:mx-10 mx-4 font-bold text-3xl text-gray-800">
        All Listed Movies
      </h1>
      <div class="container my-5 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">


          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>
          <div class="relative  my-1 px-1 w-60 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-[26rem] ">
            <div class="relative bg-cover overflow-hidden rounded-lg shadow-lg h-full w-full transform duration-500 hover:-translate-y-2 cursor-pointer group bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <div class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pb-8 pt-80 hover:bg-opacity-75 transform duration-300">
                    <p class="opacity-0 text-white text-xl mb-2 group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                    <div class="w-16 h-2 bg-red-500 rounded-full mb-0 group-hover:opacity-80 transform translate-y-32 group-hover:translate-y-0 duration-300">
                    </div>
                    <p class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                        Captain America
                    </p>
                </div>
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
}
