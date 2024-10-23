import { Link } from "../Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <a href="https://giphy.com/gifs/this-is-fine-QMHoU66sBXqqLqYvGO">
          via GIPHY
        </a>
      </div>
      <Link to="/">Volver a la Home</Link>
    </>
  );
}
