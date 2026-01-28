type Props = {
  movie: any;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
