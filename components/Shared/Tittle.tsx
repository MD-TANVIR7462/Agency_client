import React from "react";

type Tittle = {
  tittle: string;
};

const Tittle = ({ tittle }: Tittle) => {
  return (
    <h2 className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl">
      {tittle}
    </h2>
  );
};

export default Tittle;
