import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CropAdvisory from "./pages/CropAdvisory";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisory" element={<CropAdvisory />} />
      </Routes>
    </HashRouter>
  );
}

export default App;