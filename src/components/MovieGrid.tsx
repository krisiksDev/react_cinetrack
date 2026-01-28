import MovieCard from "./MovieCard";

type Props = {
  movies: any[];
};

const MovieGrid = ({ movies }: Props) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: "16px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
