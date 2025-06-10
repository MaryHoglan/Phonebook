import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.authNav}>
      <NavLink
        to="/register"
        className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}
      >
        Log In
      </NavLink>
    </div>
  );
};
