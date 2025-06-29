import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.nameAccent}>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogOut} className={css.button}>
        Logout
      </button>
    </div>
  );
}
