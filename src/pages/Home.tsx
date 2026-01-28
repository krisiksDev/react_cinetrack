import moviesData from "../data/movie.json";
import MovieGrid from "../components/MovieGrid";
import Filter from "../components/Filter";
import { useMovieFilters } from "../hooks/useMovieFilters";
import type { Movie } from "../types/movie";

const Home = () => {
  const movies: Movie[] = moviesData;
  const genres = Array.from(new Set(movies.flatMap((m) => m.genre))).sort();

  const {
    filteredMovies,
    selectedGenres,
    selectedType,
    selectedYear,
    selectedRating,
    setSelectedType,
    setSelectedYear,
    setSelectedRating,
    toggleGenre,
  } = useMovieFilters(movies);

  return (
    <div>
      <h2>Catalogue</h2>

      <Filter
        genres={genres}
        selectedGenres={selectedGenres}
        onGenreChange={toggleGenre}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
      />

      <MovieGrid movies={filteredMovies} />
    </div>
  );
};

export default Home;
