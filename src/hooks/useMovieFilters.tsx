import { useState } from "react";
import type { Movie } from "../types/movie";
import { filterMovies } from "../utils/filterMovies";

export const useMovieFilters = (movies: Movie[]) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filteredMovies = filterMovies(movies, {
    genres: selectedGenres,
    type: selectedType,
    year: selectedYear ?? undefined,
    rating: selectedRating ?? undefined,
  });

  return {
    filteredMovies,
    selectedGenres,
    selectedType,
    selectedYear,
    selectedRating,
    setSelectedType,
    setSelectedYear,
    setSelectedRating,
    toggleGenre,
  };
}; 