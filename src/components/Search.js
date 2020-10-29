import React, { useEffect, useState } from "react";
import { MoreComponent } from "./MoreComponent";
import { SpesificComponent } from "./SpesificComponent";

export const Search = (props) => {
  const perawi = props.match.params.name;
  const [spesific, setSpesific] = useState(true);

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
        {spesific ? <SpesificComponent prw={perawi} /> : <MoreComponent />}
      </div>
    </section>
  );
};
