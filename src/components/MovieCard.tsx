import { Link } from "react-router-dom";

type Props = {
  movie: any;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/detail/${movie.id}`} className="movie-card">
      <img src={movie.poster} alt={movie.title} width={180} />
      <h3>{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
    </Link>
  );
};

export default MovieCard;