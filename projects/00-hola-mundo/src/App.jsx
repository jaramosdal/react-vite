import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName="NodalJavier"
        name="Javier Ramos Nodal"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="midudev"
        name="Miguel Ángel Durán"
      />
      <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
    </section>
  );
}
