import s from './ContactForm.module.css';

const ContactForm = ({nameText, numberText, btnText}) => {
  return (
  <form className={s.form}>
      <label className={s.label}>
        {nameText}
    <input className={s.input} />
    </label>
      <label className={s.label}>
        {numberText}
    <input className={s.input} />
    </label>
      <button className={s.btn}>{btnText}</button>
    </form>
  )
}
export default ContactForm