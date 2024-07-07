import React, { useState, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import s from './App.module.css';
import phoneBook from '../../assets/phonebook.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(window.localStorage.getItem('contactsData'));
    return savedContacts ? savedContacts : phoneBook;
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = { id: `id-${new Date().getTime()}`, name, number };
    setContacts(prev => [...prev, newContact]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(item => item.id !== id));
  };

  const handleSearch = query => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm addContact={addContact} nameText='Name' numberText='Number' btnText='Add contact' />
      <SearchBox text='Find contacts by name' onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
