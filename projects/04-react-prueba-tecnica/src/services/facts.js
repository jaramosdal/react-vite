const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`;
export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
export const getCatUrl = async (threeFirstWords) => {
  const res = await fetch(
    `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`
  );
  const data = await res.json();
  const { _id: id } = data;
  return `${CAT_PREFIX_IMAGE_URL}/cat/${id}`;
};
