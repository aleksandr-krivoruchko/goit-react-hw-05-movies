import { NavLink } from 'react-router-dom';

export function Navigation() {
  return (
    <header className="header">
      <nav className="nav wrapper">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/movies" className="link">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
