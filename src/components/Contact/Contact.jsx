import { IoPerson, IoCall } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({
  data: { id, name, number },
  onDeleteContact,
}) {
  return (
    <div className={css.contact}>
      <div className={css.left}>
        <div className={css.info}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={css.info}>
          <IoCall />
          <p>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}
