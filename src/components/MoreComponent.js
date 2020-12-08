import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/Api";
import { CardMore } from "./CardMore";

export const MoreComponent = ({ prw }) => {
  const [more, setMore] = useState("");
  const [moreHadist, setMoreHadist] = useState([]);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const getMore = async (f, s) => {
    const data = await axios(`${BaseUrl}/books/${prw}?range=${f}-${s}`).then(
      (res) => res.data.data
    );
    // console.log(data);
    setMore(data);
    setMoreHadist(data.hadiths)
  };

  return (
    <>
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Banyak Hadist
              </h2>
              <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
                <input
                  className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
                  placeholder="Nomor Pertama"
                  type="number"
                  onChange={(e) => setFirst(e.target.value)}
                  value={first}
                />
                <input
                  className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
                  placeholder="Nomor Kedua"
                  type="number"
                  onChange={(e) => setSecond(e.target.value)}
                  value={second}
                />
                <button
                  className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
                  onClick={() => getMore(first, second)}
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {moreHadist.length < 0 ? (
        <div>
          <h1>Belum ada data</h1>
        </div>
      ) : (
        <>
          {moreHadist.map((mh) => {
            return <CardMore key={mh.number} num={mh.number} />;
          })}
        </>
      )}
    </>
  );
};

//https://api.hadith.sutanlab.id/books/muslim?range=1-150
