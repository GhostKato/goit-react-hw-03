import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import phonebookData from '../../assets/phonebook.json';

function App() {
  return (
    <>      
      <h1 className={s.title}>Phonebook</h1>     
      <ContactForm />
      <SearchBox/>
      <ContactList/>
    </>
  );
}

export default App;
