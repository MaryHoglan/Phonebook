import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);
  return (
    <section className={css.container}>
      <h2 className={css.title}>Login</h2>
      <LoginForm />
    </section>
  );
}

