import React from "react";
import img from "./img/book.png";

export const Book = ({ name, total, url, id }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={id}>
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover flex-shrink-0 rounded-full mr-4"
          src={img}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{name}</h2>
          <p className="text-gray-600 mb-4">Jumlah Hadist {total}</p>
          <a
            href={`/search/${url}`}
            className="flex items-center mt-auto text-white bg-green-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-green-600 rounded"
          >
            Cari
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-auto"
              viewBox="0 0 24 24"
            >
              <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
