import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const midudev = { isFollowing: true, userName: "midudev" };

  return (
    <section className="App">
      <TwitterFollowCard isFollowing userName="NodalJavier">
        Javier Ramos Nodal
      </TwitterFollowCard>

      {/* Esto es mala práctica (pasar las props así), siempre mejor separadas */}
      <TwitterFollowCard {...midudev}>Miguel Ángel Durán</TwitterFollowCard>
    </section>
  );
}
