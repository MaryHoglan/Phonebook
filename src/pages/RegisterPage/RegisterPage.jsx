import RegisterForm from "../../components/RegisterForm/RegisterForm";
import css from "./RegisterForm.module.css"

export default function RegisterPage() {
  return (
    <section className={css.container}>
      <h2 className={css.title}>Register</h2>
      <RegisterForm />
    </section>
  );
}
