import s from './Contact.module.css';

const Contact = ({name, number, textBtn}) => {
  return (
    <div className={s.container}>    
   <div className={s.contact}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
   </div>
    <button className={s.btn}>{textBtn}</button>
    </div>
  )
}
export default Contact
