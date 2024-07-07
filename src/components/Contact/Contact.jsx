import s from './Contact.module.css';

const Contact = ({name, number, textBtn, deleteContact, id}) => {
  return (
    <div className={s.container}>    
   <div className={s.contact}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
   </div>
      <button className={s.btn} onClick={() => deleteContact(id)}>{textBtn}</button>
    </div>
  )
}
export default Contact
