import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import Router from "./Router";

const appRoutes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/test",
    Component: () => <h1>ESTO ES UNA PREUBA</h1>,
  },
];

function App() {
  return (
    <main>
      <Router routes={appRoutes} />
    </main>
  );
}

export default App;
