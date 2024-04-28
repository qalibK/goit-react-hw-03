import css from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={css.searchBox}>
      <p>Search by name</p>
      <input
        value={value}
        onChange={onChange}
        type="text
      "
      />
    </div>
  );
}
