import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import History from "./pages/History";
import { HistoryProvider } from "./context/HistoryContext";

function App() {
  return (
    <HistoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </HistoryProvider>
  );
}

export default App;
