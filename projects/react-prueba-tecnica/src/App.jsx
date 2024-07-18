import React, { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
// xconst CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`;
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`;

const App = () => {
  const [fact, setFact] = useState("lorem ipsum cat fact whatever");
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstThreeWords = fact.split(" ", 3).join(" ");

        fetch(
          `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { _id: id } = response;
            const url = `https://cataas.com/cat/${id}`;
            console.log(url);
            setImageUrl(url);
          });
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${imageUrl}`}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  );
};

export default App;
