import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";
import { useWatchlist } from "../context/WatchlistContext";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();

  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  return (
    <div className="movie-card">
      {/* Zone cliquable vers le détail */}
      <Link
        to={`/detail/${movie.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={movie.poster} alt={movie.title} width={180} />
        <h3>{movie.title}</h3>
        <p>⭐ {movie.rating}</p>
      </Link>

      {/* Boutons (harmonisés avec button.css) */}
      <button
        type="button"
        className="ui-button"
        onClick={() => addToWatchlist(movie)}
        disabled={isInWatchlist}
        aria-label={`Ajouter ${movie.title} à la watchlist`}
      >
        {isInWatchlist ? "Dans la watchlist" : "Ajouter à la watchlist"}
      </button>

      <button
        type="button"
        className="ui-button"
        onClick={() => removeFromWatchlist(movie.id)}
        disabled={!isInWatchlist}
        aria-label={`Retirer ${movie.title} de la watchlist`}
      >
        Retirer de la watchlist
      </button>
    </div>
  );
};

export default MovieCard;
