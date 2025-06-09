import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectIsLoading, selectError } from "../../redux/contactsSlice";


import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import style from "./App.module.css"



function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <div className={style.container} >
      <h1 className={style.title}>Phonebook </h1>
      <ContactForm  />
      <SearchBox />
      {isLoading && <div className={style.loader}>Loading contacts...</div>}
      {error && <div className={style.error}>Error: {error}</div>}
      <ContactList />
    </div>
  );
}

export default App;