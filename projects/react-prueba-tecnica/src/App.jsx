import React, { useEffect, useState } from "react";

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
// xconst CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;
const App = () => {
  const [fact, setFact] = useState("lorem ipsum cat fact whatever");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstWord = fact.split(" ")[0];
        console.log(firstWord);
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  );
};

export default App;
