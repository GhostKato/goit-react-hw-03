import s from './SearchBox.module.css';
const SearchBox = ({ text }) => {
  return (
    <label className={s.label}>
      {text}
      <input className={s.input} />
    </label>
  )
}
export default SearchBox