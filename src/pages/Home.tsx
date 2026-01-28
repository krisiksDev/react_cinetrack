import moviesData from "../data/movie.json";
import MovieGrid from "../components/MovieGrid";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { useMovieFilters } from "../hooks/useMovieFilters";
import type { Movie } from "../types/movie";
import "../styles/home.css";

const Home = () => {
  const raw = moviesData as unknown as any;
  const movies: Movie[] = Array.isArray(raw) ? raw : raw?.content ?? [];

  const genres = Array.from(new Set(movies.flatMap((m) => m.genre ?? []))).sort();

  const {
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
  } = useMovieFilters(movies);

  return (
    <div className="home">
      <h2>Catalogue</h2>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

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
