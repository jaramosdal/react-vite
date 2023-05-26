import React from "react";
import "./App.css";

export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar random que cogí"
          src="https://unavatar.io/kikobeats"
        />
        <div className="tw-followCard-info">
          <strong className="tw-followCard-infoUserName">
            Javier Ramos Nodal
          </strong>
          <span>@NodalJavier</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
