import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎬 Bienvenue sur CinéTrack</h1>
      <p>Ton Netflix personnel</p>

      <button onClick={() => navigate("/home")}>
        Entrer
      </button>
    </div>
  );
};

export default Welcome;
