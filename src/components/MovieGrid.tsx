import MovieCard from "./MovieCard";

type Props = {
  movies: any[];
};

const MovieGrid = ({ movies }: Props) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
