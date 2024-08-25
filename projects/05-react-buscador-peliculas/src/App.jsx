import { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
// import { useRef } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return {
    search,
    updateSearch,
    error,
  };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch("");
  const { movies, loading, getMovies } = useMovies({ search, sort });

  // const inputRef = useRef(); // NO ABUSAR DE ESTO

  const debauncedGetMovies = useCallback(
    debounce((search) => {
      console.log("search", search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debauncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h3>Buscador de películas</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            name="search"
            // ref={inputRef}
            placeholder="Avengers, Star Wars, The Matrix..."
            value={search}
            onChange={handleChange}
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && (
          <p style={{ color: "red" }} className="error">
            {error}
          </p>
        )}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;
