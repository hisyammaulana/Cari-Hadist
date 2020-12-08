import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/Api";
import { CardSpesific } from "./CardSpesific";

export const SpesificComponent = ({ prw }) => {
  const [hadist, setHadist] = useState({});
  const [num, setNum] = useState("");

  const getHadist = async (no) => {
    const data = await axios(`${BaseUrl}/books/${prw}/${no}`).then(
      (res) => res.data.data
    );
    // setHadist(data)
    setHadist(data);
  };

  useEffect(() => {
    console.log(hadist.length);
  });

  return (
    <>
      <div className="container mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="h-full p-6 rounded-lg border-2 border-green-500 flex flex-col relative overflow-hidden">
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Spesifik Hadist
              </h2>
              <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
                <input
                  className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
                  placeholder="Masukkan Nomor Hadist"
                  type="number"
                  onChange={(e) => setNum(e.target.value)}
                  value={num}
                />
                <button
                  className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg"
                  onClick={() => getHadist(num)}
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      {/* {hadist === null ? (
        <CardSpesific
          showCard="none"
          hr={hadist.name}
          hadist={hadist && hadist.contents && hadist.contents.arab}
          terjemahan={hadist && hadist.contents && hadist.contents.id}
          num={hadist && hadist.contents && hadist.contents.number}
        />
      ) : (
        <CardSpesific
          showCard=""
          hr={hadist.name}
          hadist={hadist && hadist.contents && hadist.contents.arab}
          terjemahan={hadist && hadist.contents && hadist.contents.id}
          num={hadist && hadist.contents && hadist.contents.number}
        />
      )} */}
    </>
  );
};
