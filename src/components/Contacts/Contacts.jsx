
import { FaPhone, FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from "../ContactList/ContactList.module.css";

export default function Contact({ data: { id, name, number } }) {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };



  return (
    <li className={css.listItem}>
      <div className={css.contInfo}>
        <p className={css.contName}>
          <FaUser className={css.icon}/>
          {name}
        </p>
        <a
          className={css.contNum}
          href={`tel:${number.replace(/[^\d+]/g, "")}`}
        >
          <FaPhone
            className={css.icon}/>
          {number}
        </a>
      </div>
      <button  type="button" onClick={handleDelete} className={css.btnDelete}>
        Delete
      </button>
    </li>
  );
}
