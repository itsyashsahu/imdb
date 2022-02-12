import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 z-40">
        <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
          <div class="relative items-center pl-1 flex  w-full lg:max-w-68 sm:pr-2 sm:ml-0">
            <div class="relative p-1 flex items-center justify-start w-full ml-5 mr-4 sm:mr-0 sm:right-auto">
              <a href="#" class="block relative text-xl text-white">
                IMDB Movie Rating Website
              </a>
            </div>
            <div class="container relative z-50 flex justify-end mr-auto h-auto h-full">
              <div class="relative flex items-center w-full lg:w-64 h-full group">
                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                  <svg
                    fill="none"
                    class="relative w-5 h-5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <svg
                  class="absolute right-5 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                </svg>
                <input
                  type="text"
                  class="block w-full py-1.5 pl-8 pr-2 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

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
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>


          <div class="relative  my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 h-80 hover:bg-opacity-75 transform duration-300 ">
            <div class="relative overflow-hidden rounded-lg shadow-lg h-full w-full hover:bg-opacity-75 transform duration-300 bg-[url('https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg')]">
              <a href="#"
                  class="block h-auto w-full h-full hover:bg-opacity-75 transform duration-300"

              >
                {/* <img
                  alt="Placeholder"
                  class="block h-auto w-full h-full hover:bg-opacity-75 transform duration-300"
                  // src="https://picsum.photos/600/800/?random"
                  src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
                /> */}

              </a>
              <div class="absolute inset-x-0 bottom-0 bg-gray-300 flex items-center z-10 justify-between leading-tight py-2 px-8 md:py-4 md:px-6 hover:bg-opacity-75">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black text-white opacity-100" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm text-right">11/1/19 tille tielelasd;lkfaj</p>
              </div>
            </div>
          </div>



          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <article class="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-black" href="#">
                    Article Title
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                <a
                  class="flex items-center no-underline hover:underline text-black"
                  href="#"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">Author Name</p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>

          

        </div>
      </div>
    </>
  );
}
