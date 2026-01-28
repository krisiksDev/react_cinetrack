import { useParams } from "react-router-dom";
import moviesData from "../data/movie.json";
import type { Movie } from "../types/movie";

const Detail = () => {
  const { id } = useParams();
  const movies: Movie[] = moviesData;
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <p>Film introuvable.</p>;
  }

  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} width={200} />

      <p><strong>Type :</strong> {movie.type}</p>
      <p><strong>Année :</strong> {movie.year}</p>
      <p><strong>Durée :</strong> {movie.duration} min</p>
      <p><strong>Genres :</strong> {movie.genre.join(", ")}</p>
      <p><strong>Réalisateur :</strong> {movie.director}</p>
      <p><strong>Acteurs :</strong> {movie.cast.join(", ")}</p>
      <p><strong>Note :</strong> {movie.rating}/10</p>

      <h3>Synopsis</h3>
      <p>{movie.synopsis}</p>
    </div>
  );
};

export default Detail;