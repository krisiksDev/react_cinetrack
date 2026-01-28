import { useMemo, useState } from "react";
import type { Movie } from "../types/movie";
import { filterMovies } from "../utils/filterMovies";

export const useMovieFilters = (movies: Movie[]) => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filteredMovies = useMemo(() => {
    const list = Array.isArray(movies) ? movies : [];
    const q = searchQuery.trim().toLowerCase();

    // 1) Recherche par titre
    const searched = q ? list.filter((m) => (m.title ?? "").toLowerCase().includes(q)) : list;

    // 2) Filtres (genre/type/année/note)
    return filterMovies(searched, {
      genres: selectedGenres,
      type: selectedType,
      year: selectedYear ?? undefined,
      rating: selectedRating ?? undefined,
    });
  }, [movies, searchQuery, selectedGenres, selectedType, selectedYear, selectedRating]);

  return {
    filteredMovies,

    selectedGenres,
    selectedType,
    selectedYear,
    selectedRating,
    searchQuery,

    setSelectedType,
    setSelectedYear,
    setSelectedRating,
    setSearchQuery,

    toggleGenre,
  };
};
