import s from './Contact.module.css';

const Contact = ({name, number}) => {
  return <>    
    <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
  </>
}
export default Contact
