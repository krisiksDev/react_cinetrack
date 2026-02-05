import MovieGrid from "../components/MovieGrid";
import { useWatchlist } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

const Watchlist = () => {
    const { watchlist } = useWatchlist();
    <Link to="/home">Retour à l'accueil</Link>
    if (watchlist.length === 0) return <p>Votre watchlist est vide.</p>;

    return (
        <div className="watchlist">
            <h2>Ma Watchlist</h2>
            <MovieGrid movies={watchlist} />
        </div>
    );
};

export default Watchlist;