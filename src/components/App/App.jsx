import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import phonebook from '../../assets/phonebook.json';

function App() {
  return (
    <>      
      <h1 className={s.title}>Phonebook</h1>     
      <ContactForm nameText='Name' numberText='Number' btnText='Add contact' />
      <SearchBox text='Find contacts by name'/>
      <ContactList phonebook={phonebook} />
    </>
  );
}

export default App;
