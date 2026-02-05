import MovieGrid from "../components/MovieGrid";
import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { watchlist } = useWatchlist();

  if (watchlist.length === 0) {
    return (
      <div className="watchlist">
        <h2>Ma Watchlist</h2>

        <Link to="/home" className="history-link">
          <span className="ui-button">Retour à l'accueil</span>
        </Link>

        <p>Votre watchlist est vide.</p>
      </div>
    );
  }

  return (
    <div className="watchlist">
      <h2>Ma Watchlist</h2>

      <Link to="/home" className="history-link">
        <span className="ui-button">Retour à l'accueil</span>
      </Link>

      <MovieGrid movies={watchlist} />
    </div>
  );
};

export default Watchlist;
