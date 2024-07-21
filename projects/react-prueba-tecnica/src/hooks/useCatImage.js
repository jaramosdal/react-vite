import { useEffect, useState } from "react";
import { getCatUrl } from "../services/facts";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");
    const url = getCatUrl(threeFirstWords).then(setImageUrl);
  }, [fact]);

  return {
    imageUrl,
  };
}
