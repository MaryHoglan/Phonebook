import { Formik, Form, Field } from "formik";
import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    
    dispatch(login(values)); 
    actions.resetForm(); 
  };

  return (
    <Formik
          initialValues={{
              email: "",
              password: ""
          }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field type="email" name="email" required />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}

