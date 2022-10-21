import React from "react";

const Pelicula = ({ item, index }) => {
  return (
    <li key={item._id} className=" card-body">
      <img src={item.poster} style={{ maxWidth: "100px" }}></img>
      <h5 className="card-title">Titulo: {item.title}</h5>
      <p>{item.fullplot}</p>
      <hr />
    </li>
  );
};
export default Pelicula;
