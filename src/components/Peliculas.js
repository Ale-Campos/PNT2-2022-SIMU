import React from "react";
import Pelicula from "./Pelicula";
const Peliculas = ({ peliculas }) => {
  return (
    <ul className="card">
      {peliculas.map((item, index) => {
        return <Pelicula item={item} index={index}></Pelicula>;
      })}
    </ul>
  );
};
export default Peliculas;
