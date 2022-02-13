import React from "react";
import Header from "../comp/Header";

export default function movie() {
  return (
    <>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden h-4/6">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap justify-center">
            {/* <div className="w-96 h-3/5">
                <img
                    alt="ecommerce"
                    className="w-full h-full object-cover object-center rounded"
                //   src="https://dummyimage.com/400x400"
                    src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
                />

              </div> */}

            <div className="w-96 h-[30rem] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                className="h-full w-full"
                src="https://m.media-amazon.com/images/M/MV5BYmRmYzA4NDItZmI3NS00NWIyLWIzZWEtNGIzZjZlYmY5MzE2XkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4 mr-4">
                <span className="flex items-center mr-4">
                  <span className="text-gray-600">Genre : Action , Drama</span>
                </span>
                <span className="flex ml-3 pl-3 py-0 border-l-2 border-gray-200 space-x-2s">
                  <span className="text-gray-600 ml-3">Year : 2000</span>
                </span>
              </div>
              <p className="leading-relaxed pb-5">
                <span className="text-gray-600">Released On : 2000</span>
                <br />
                <span className="text-gray-600">Runtime : 2000</span>
                <br />
                <span className="text-gray-600">Directors : Atul Agnihotri</span>
                <br />
                <span className="text-gray-600">Actors : Atul Agnihotri</span>
                <br />
                <span className="text-gray-600">Writers : Atul Agnihotri</span>
                <br />
                <span className="text-gray-600">Languages : Atul Agnihotri</span>
                <br />
                <br />
                {/* plot */}A harrowing tale of survival centers on Rose, a
                Masurian woman, whose husband, a German soldier, was killed in
                the war, leaving her alone on their farm. A single woman had no
                defense against Russian soldiers who raped as a form of re
              </p>
              {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div> */}

              <div className="flex justify-between pt-2 border-t-2 border-gray-100 ">
                <span className="flex items-center title-font font-medium text-2xl text-gray-900">
                  Upvotes : 456 &nbsp;
                  <button>
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
                  Downvotes : 456 &nbsp;
                  <button>

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

                {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
