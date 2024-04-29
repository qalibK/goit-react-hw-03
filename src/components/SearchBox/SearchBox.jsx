import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text
      "
      />
    </div>
  );
}
