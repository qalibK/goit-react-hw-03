import { IoPerson, IoCall } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number } }) {
  return (
    <div className={css.contact}>
      <div>
        <div className={css.info}>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div className={css.info}>
          <IoCall />
          <p>{number}</p>
        </div>
      </div>
      <button type="button">Delete</button>
    </div>
  );
}
