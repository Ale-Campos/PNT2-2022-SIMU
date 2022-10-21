import { useEffect, useState } from "react";
import "./App.css";
import Paginas from "./components/Paginas";

function App() {
  const [peliculas, setPeliculas] = useState([]);

  const SIZE = 5;
  const PAGE = 10;
  console.log("EJECUTO");
  const [pagina, setPaginas] = useState(PAGE);
  const prev = pagina - 1;
  const next = pagina + 1;

  console.log("PAGINA: " + pagina);
  console.log("NEXT " + next);
  console.log("PREV " + prev);

  function onPrev() {
    console.log("OnPrev");
    console.log(prev);
    if (prev < 1) {
      console.log("entroID");
    } else {
      setPaginas(prev);
      fetchPeliculas(SIZE, prev);
    }
  }

  function onNext() {
    setPaginas(next);
    console.log("OnNext");
    console.log(next);
    fetchPeliculas(SIZE, next);
  }

  function fetchPeliculas(size, page) {
    console.log("Fetach");
    fetch(`http://localhost:3001/api/movies?pageSize=${size}&page=${page}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchPeliculas(SIZE, PAGE);
  }, []);

  return (
    <Paginas peliculas={peliculas} onNext={onNext} onPrev={onPrev}></Paginas>
  );
}

export default App;
