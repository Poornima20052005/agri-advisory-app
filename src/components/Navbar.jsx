import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#dff5e1" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/advisory">Crop Advisory</Link> |{" "}
      <Link to="/crops">Crop List</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;