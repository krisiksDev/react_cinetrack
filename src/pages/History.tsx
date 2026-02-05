import MovieGrid from "../components/MovieGrid";
import { useHistory } from "../context/HistoryContext";
import "../styles/home.css";

const History = () => {
  const { history, clearHistory } = useHistory();

  return (
    <div className="home">
      <h2>Historique</h2>

      {history.length > 0 ? (
        <>
          <button onClick={clearHistory} style={{ marginBottom: 16 }}>
            Vider l’historique
          </button>

          <MovieGrid movies={history} />
        </>
      ) : (
        <p>Aucun film/série marqué comme vu pour l’instant.</p>
      )}
    </div>
  );
};

export default History;
