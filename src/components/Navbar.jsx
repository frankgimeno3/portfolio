import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar ">
      <Link to="/" className="btn">
        Home
      </Link>
      <Link to="/portfolio" className="btn">
        <span className="actual-text">Portfolio </span>
      </Link>
      <Link to="/career" className="btn">
        <span className="actual-text">Career </span>
      </Link>
    </nav>
  );
}

export default Navbar;