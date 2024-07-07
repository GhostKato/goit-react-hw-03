import s from './SearchBox.module.css';
const SearchBox = ({ text }) => {
  return (
    <div className={s.container}>
    <label className={s.label} htmlFor='username'>
      {text}
      </label>
      <input className={s.input} id='usernumber'/>
    </div>
  )
}
export default SearchBox