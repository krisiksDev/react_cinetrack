type Props = {
  movie: any;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div>
      <img src={movie.poster} alt={movie.title} width={180} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
