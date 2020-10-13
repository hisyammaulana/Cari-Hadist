import React, { useEffect, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../utils/Api";
import { Book } from "./Book";

export const ListBooks = () => {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    const data = await axios
      .get(`${BaseUrl}/books`)
      .then((res) => res.data.data);
    setBook(data);
  };

  useEffect(() => {
    document.title = "Hadist App";
    getBook();
  });
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {book.map((books) => {
            return (
              <Book
                id={books.id}
                name={books.name}
                total={books.available}
                url={books.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
