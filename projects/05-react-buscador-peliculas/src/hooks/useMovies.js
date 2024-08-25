import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies.js";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  // Esto y lo de arriba es lo mismo, pero usando diferente hook
  // const getMovies = useMemo(() => {
  //   console.log("getMovies defined");
  //   return async ({ search }) => {
  //     if (search === previousSearch.current) return;
  //     try {
  //       setLoading(true);
  //       setError(null);
  //       previousSearch.current = search;
  //       const newMovies = await searchMovies({ search });
  //       setMovies(newMovies);
  //     } catch (e) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  // }, []);
  const sortedMovies = useMemo(() => {
    console.log("memoSortedMovies");

    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  console.log(`render`, sortedMovies);

  return { movies: sortedMovies, loading, getMovies };
}
