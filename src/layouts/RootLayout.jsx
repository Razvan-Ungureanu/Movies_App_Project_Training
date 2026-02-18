import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="container">
      <div className="nav">
        <NavLink
          to="/movies"
          end
          className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`}
        >
          Movies
        </NavLink>

        <NavLink
          to="/watchlist"
          className={({ isActive }) => `nav-btn ${isActive ? "active" : ""}`}
        >
          Watchlist
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}
