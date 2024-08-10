import { useEffect, useState, useRef } from "react";
import "./App.css";
// import { useRef } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

// http://www.omdbapi.com/?apikey=[yourkey]&
// ba413d48

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
  const { movies } = useMovies();
  const { search, updateSearch, error } = useSearch("");

  // const inputRef = useRef(); // NO ABUSAR DE ESTO

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ search });
  };

  const handleChange = (event) => {
    updateSearch(event.target.value);
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
          <button type="submit">Buscar</button>
        </form>
        {error && (
          <p style={{ color: "red" }} className="error">
            {error}
          </p>
        )}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
