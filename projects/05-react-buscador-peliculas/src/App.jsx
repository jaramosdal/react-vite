import "./App.css";
import responseMovies from "./mocks/with-results.json";
import { Movies } from "./components/Movies";

// http://www.omdbapi.com/?apikey=[yourkey]&
// ba413d48

function App() {
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

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
        <Movies movies={mappedMovies} />
      </main>
    </div>
  );
}

export default App;
