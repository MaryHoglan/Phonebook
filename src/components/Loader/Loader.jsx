import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.spinner}></div>
      <p className={css.text}>Refreshing user...</p>
    </div>
  );
}