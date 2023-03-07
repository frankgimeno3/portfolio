import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Career from "./pages/Career";
import Portfolio from "./pages/Portfolio";
import ErrorPage from './pages/ErrorPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;