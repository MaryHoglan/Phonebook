import Contact from "../Contacts/Contacts";
import style from "./ContactList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import { selectFilteredContacts } from '../../redux/contacts/slice';

export default function ContactList() {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectFilteredContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={style.contactsList}>
      {visibleContacts.length ? (
        visibleContacts.map((contact) => (
          <Contact key={contact.id} data={contact} onDelete={handleDelete} />
        ))
      ) : (
        <p className={style.noMatches}>No matches found</p>
      )}
    </ul>
  );
}

