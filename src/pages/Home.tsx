import movies from "../data/movie.json";
import MovieGrid from "../components/MovieGrid";

const Home = () => {
  return (
    <div>
      <h2>Catalogue</h2>
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;
