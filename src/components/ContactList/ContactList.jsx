import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
const ContactList = ({ phonebook }) => {
  return <ul className={s.list}>
    {phonebook.map(contact => (
        <li className={s.item} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}            
          />
        </li>
      ))}
  </ul>
}
export default ContactList