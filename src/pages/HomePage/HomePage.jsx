import { useState, useEffect } from "react";
import css from "./HomePage.module.css";
import { FaPhoneSquare } from "react-icons/fa";

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowCursor(false);
      setShowText(true);
    }, 4000); 
  }, []);

  return (
    <section className={css.container}>
      <h1 className={`${css.title} ${css.typing}`} style={{ borderRight: showCursor ? "2px solid #fcd34d" : "none" }}>
        Welcome to <span className={css.phonebook}>Phonebook App </span><FaPhoneSquare className={css.icon}/>
      </h1>
      {showText && (
        <p className={`${css.text} ${css.typing}`}>
          Please <span className={css.highlight}>register</span> or <span className={css.highlight}>log in</span> to manage your contacts.
        </p>
      )}
    </section>
  );
}
