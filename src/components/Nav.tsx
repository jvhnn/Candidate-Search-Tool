import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={navStyles}>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeLinkStyles : navStyles)}
      >
        Home
      </NavLink>
      <NavLink
        to="/SavedCandidates"
        style={({ isActive }) => (isActive ? activeLinkStyles : navStyles)}
      >
        Saved Candidates
      </NavLink>
    </nav>
  );
};

const navStyles: React.CSSProperties = {
  color: "whitesmoke",
  textDecoration: "none",
  padding: "10px",
};

const activeLinkStyles: React.CSSProperties = {
  ...navStyles,
  fontWeight: "bold",
  textDecoration: "underline",
};

export default Nav;
