import MovieGrid from "../components/MovieGrid";
import { useHistory } from "../context/HistoryContext";

const History = () => {
  const { history, clearHistory } = useHistory();

  return (
    <div className="home">
      <h2>Historique</h2>

      {history.length > 0 ? (
        <>
          <div style={{ marginBottom: 16 }}>
            <button
              type="button"
              className="ui-button"
              onClick={clearHistory}
            >
              Vider l’historique
            </button>
          </div>

          <MovieGrid movies={history} />
        </>
      ) : (
        <p>Aucun film/série marqué comme vu pour l’instant.</p>
      )}
    </div>
  );
};

export default History;
