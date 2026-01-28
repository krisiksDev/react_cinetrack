import type { Movie } from "../types/movie";

type FilterOptions = {
  genres?: string[];
  type?: string;
  year?: number;   // interprété ici comme "année minimum"
  rating?: number; // note minimum
};

export const filterMovies = (movies: Movie[], options: FilterOptions) => {
  const {
    genres = [],
    type = "",
    year,
    rating,
  } = options;

  const list = Array.isArray(movies) ? movies : [];

  return list.filter((movie) => {
    // Type (film/série)
    if (type && movie.type !== type) return false;

    // Genres (au moins un genre sélectionné doit matcher)
    if (genres.length > 0) {
      const movieGenres = movie.genre ?? [];
      const match = genres.some((g) => movieGenres.includes(g));
      if (!match) return false;
    }

    // Année minimum
    if (typeof year === "number" && movie.year < year) return false;

    // Note minimum
    if (typeof rating === "number" && movie.rating < rating) return false;

    return true;
  });
};
