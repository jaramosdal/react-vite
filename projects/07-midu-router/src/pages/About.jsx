import { navigate } from "../Link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1690621186340773888/gOdSbN6R_400x400.jpg"
          alt="Foto de Javier Ramos"
        />
      </div>
      <p>Hola! Me llamo Javier Ramos y estoy creando un clon de React Router</p>
      <button onClick={() => navigate("/")}>Ir a la Home</button>
    </>
  );
}
