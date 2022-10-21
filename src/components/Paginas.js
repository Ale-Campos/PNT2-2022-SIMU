import React from "react";
import Peliculas from "./Peliculas";
const Paginas = ({ peliculas, onPrev, onNext }) => {
  const handlerPrev = () => {
    onPrev();
  };

  const handlerNext = () => {
    onNext();
  };
  return (
    <div>
      <ul className="pagination justify-content-center">
        <li>
          <button className="page-link" onClick={handlerPrev}>
            Previous
          </button>
        </li>

        <li>
          <button className="page-link" onClick={handlerNext}>
            Next
          </button>
        </li>
      </ul>
      <Peliculas peliculas={peliculas}></Peliculas>
    </div>
  );
};

export default Paginas;
