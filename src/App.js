import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import useLocalStorage from "./hooks/useLocalStorage";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

import "./App.css";

const App = () => {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const addContact = (name, number) => {
    if (contacts.some((contact) => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        id: uuidv4(),
        name: name,
        number: number,
      };
      setContacts((prevContacts) => [newContact, ...prevContacts]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      {contacts.length > 0 && (
        <section>
          <h2>Contacts</h2>

          {contacts.length > 1 && (
            <Filter
              value={filter}
              onChangeFilter={({ target }) => setFilter(target.value)}
            />
          )}
          {contacts.length > 1 && visibleContacts.length === 0 && (
            <p>no results were found for your search</p>
          )}

          <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
        </section>
      )}
    </div>
  );
};

export default App;
