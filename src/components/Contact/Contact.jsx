import s from './Contact.module.css';
import { FaUser, FaPhone } from "react-icons/fa6";

const Contact = ({name, number, deleteContact, id}) => {
  return (
    <div className={s.container}>    
      <div className={s.contact}>
        <div className={s.containerItem}>
          <FaUser className={s.icon} />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.containerItem}>
          <FaPhone className={s.icon}/>
        <p className={s.number}>{number}</p>
        </div>
   </div>
      <button className={s.btn} onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}
export default Contact
