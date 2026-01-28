import { useNavigate } from "react-router-dom";
import "../styles/welcomes.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome">
      <h1>
        🎬 Ciné<span>Track</span>
      </h1>
      <p>Ton Netflix personnel pour films & séries</p>

      <button onClick={() => navigate("/home")}>
        Entrer
      </button>
    </div>
  );
};

export default Welcome;
