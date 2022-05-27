import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import DetailsPage from "./pages/DetailsPage";

const NavBar = () => {
  return (
    <div>
      <Link style={{ marginRight: 30 }} to="/">
        Homepage
      </Link>
      <Link to="/about">About us</Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/details/:pokeName" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
