import { NavLink } from 'react-router-dom';
// import css from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className="nav wrapper">
      <NavLink to="/" className="link">
        Home
      </NavLink>

      <NavLink to="/movies" className="link">
        Movies
      </NavLink>
    </nav>
  );
}
