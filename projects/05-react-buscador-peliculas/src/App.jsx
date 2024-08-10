import { useState } from "react";
import "./App.css";
// import { useRef } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

// http://www.omdbapi.com/?apikey=[yourkey]&
// ba413d48

function App() {
  const { movies } = useMovies();
  const [query, setQuery] = useState("");
  // const inputRef = useRef(); // NO ABUSAR DE ESTO

  const handleSubmit = (event) => {
    event.preventDefault();

    // SOLO ES UN EJEMPLO, MEJOR NO USAR useRef()
    // const inputElement = inputRef.current;
    // const value = inputElement.value;
    // console.log(value);

    // const fields = new FormData(event.target);
    // const query = fields.get("query");
    // console.log(query);

    // const { query } = Object.entries(new window.FormData(event.target));
    console.log(query);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="page">
      <header>
        <h3>Buscador de películas</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input
            name="query"
            // ref={inputRef}
            placeholder="Avengers, Star Wars, The Matrix..."
            value={query}
            onChange={handleChange}
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
