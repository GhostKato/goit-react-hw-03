import s from './ContactForm.module.css';

const ContactForm = ({nameText, numberText, btnText}) => {
  return (
  <form className={s.form}>
      <label className={s.label} htmlFor='username'>
        {nameText}
        </label>
    <input className={s.input} id='username' />
    
      <label className={s.label} htmlFor="usernumber">
        {numberText}
         </label>
    <input className={s.input} id='usernumber' />
   
      <button className={s.btn}>{btnText}</button>
    </form>
  )
}
export default ContactForm