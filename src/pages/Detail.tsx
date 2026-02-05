import { useParams } from "react-router-dom";
import moviesData from "../data/movie.json";
import type { Movie } from "../types/movie";
import { useHistory } from "../context/HistoryContext";

const Detail = () => {
  const { id } = useParams();
  const movieId = Number(id);

  const raw = moviesData as unknown as any;
  const movies: Movie[] = Array.isArray(raw) ? raw : raw?.content ?? [];

  const movie = movies.find((m) => m.id === movieId);

  const { addToHistory, removeFromHistory, isInHistory } = useHistory();
  const alreadySeen = Number.isFinite(movieId) ? isInHistory(movieId) : false;

  if (!movie) {
    return <p>Film introuvable.</p>;
  }

  const handleToggleSeen = () => {
    if (alreadySeen) removeFromHistory(movie.id);
    else addToHistory(movie);
  };

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} width={200} />

      <div style={{ display: "flex", gap: 12, margin: "12px 0 18px" }}>
        <button onClick={handleToggleSeen}>
          {alreadySeen ? "Déjà vu (retirer)" : "Marquer comme vu"}
        </button>
      </div>

      <p>
        <strong>Type :</strong> {movie.type}
      </p>
      <p>
        <strong>Année :</strong> {movie.year}
      </p>
      <p>
        <strong>Durée :</strong> {movie.duration} min
      </p>
      <p>
        <strong>Genres :</strong> {(movie.genre ?? []).join(", ")}
      </p>
      <p>
        <strong>Réalisateur :</strong> {movie.director}
      </p>
      <p>
        <strong>Acteurs :</strong> {(movie.cast ?? []).join(", ")}
      </p>
      <p>
        <strong>Note :</strong> {movie.rating}/10
      </p>

      <h3>Synopsis</h3>
      <p>{movie.synopsis}</p>
    </div>
  );
};

export default Detail;
