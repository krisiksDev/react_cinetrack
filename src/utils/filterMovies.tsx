import type { Movie } from "../types/movie";

export const filterMovies = (
  movies: Movie[],
  filters: { genres?: string[]; type?: string; year?: number; rating?: number }
): Movie[] => {
  return movies.filter(movie => {
    const matchGenre =
      !filters.genres || filters.genres.every(g => movie.genre.includes(g));
    const matchType = !filters.type || movie.type === filters.type;
    const matchYear = !filters.year || movie.year === filters.year;
    const matchRating = !filters.rating || movie.rating >= filters.rating;
    return matchGenre && matchType && matchYear && matchRating;
  });
};