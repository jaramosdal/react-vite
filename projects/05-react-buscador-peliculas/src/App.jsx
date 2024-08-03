import "./App.css";

// http://www.omdbapi.com/?apikey=[yourkey]&
// ba413d48

function App() {
  return (
    <div className="page">
      <header>
        <h3>Buscador de películas</h3>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix..." />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main>Aquí irán los resultados</main>
    </div>
  );
}

export default App;
