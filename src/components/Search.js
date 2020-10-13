import React, { useEffect, useState } from "react";

export const Search = (props) => {
  const perawi = props.match.params.name;
  const [spesific, setSpesific] = useState(true);

  const SpesificCard = () => {
    return (
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
            <div className="text-center relative z-10 w-full">
              <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-teal-500 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Jane Doe"
                    aria-label="Full name"
                  />
                  <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Sign Up
                  </button>
                  <button
                    className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
                    type="button"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MoreHadistCard = () => {
    return (
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Banyak Hadist
              </h2>
              <p className="leading-relaxed">
                Skateboard +1 mustache fixie paleo lumbersexual.
              </p>
              <a className="mt-3 text-green-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    document.title = "Cari Hadist";
  });
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-row lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div
              className={
                spesific
                  ? "bg-green-600 rounded flex p-4 h-full cursor-pointer"
                  : "bg-green-400 rounded flex p-4 h-full hover:bg-green-600 cursor-pointer"
              }
              onClick={() => setSpesific(true)}
            >
              <span className="title-font text-white font-medium items-center">
                Cari Spesifik Hadist
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div
              className={
                spesific === false
                  ? "bg-green-600 rounded flex p-4 h-full cursor-pointer"
                  : "bg-green-400 rounded flex p-4 h-full hover:bg-green-600 cursor-pointer"
              }
              onClick={() => setSpesific(!spesific)}
            >
              <span className="title-font text-white font-medium items-center">
                Cari Banyak Hadist
              </span>
            </div>
          </div>
        </div>
        {/* card search */}
        {spesific ? <SpesificCard /> : <MoreHadistCard />}
      </div>
    </section>
  );
};
