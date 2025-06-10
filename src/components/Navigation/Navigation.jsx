import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";


export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (

        <nav className={css.nav}>
           <NavLink
  to="/"
  className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}
>
  Home
</NavLink>

{isLoggedIn && (
  <NavLink
    to="/contacts"
    className={({ isActive }) => `${css.link} ${isActive ? css.active : ''}`}
  >
    Contacts
  </NavLink>
)}

        </nav>
    );
};