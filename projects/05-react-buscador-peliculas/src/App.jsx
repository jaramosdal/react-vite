import "./App.css";
import { useRef } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

// http://www.omdbapi.com/?apikey=[yourkey]&
// ba413d48

function App() {
  const { movies } = useMovies();

  return (
    <div className="page">
      <header>
        <h3>Buscador de películas</h3>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix..." />
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
