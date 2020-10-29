import React from "react";

export const CardSpesific = ({ hadist, terjemahan }) => {
  return (
    <div className="container py-10 mx-auto flex flex-wrap">
      <div className="w-full p-2 mx-auto">
        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
          <div ame="w-full p-4 mx-auto">
            <p className="py-3 text-base font-bold">Hadis Riwayat Nomor</p>
            <p className="leading-10 text-right">{hadist}</p>
            <p className="py-3 text-base font-bold">Terjemahan</p>
            <p className="leading-10 text-base">{terjemahan}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
