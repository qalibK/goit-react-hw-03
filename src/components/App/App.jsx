import { useState } from "react";
import initialContacts from "../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  const saveContacts = (newContacts) => {
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const newContacts = [...prevContacts, newContact];
      saveContacts(newContacts);
      return newContacts;
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      const newContacts = prevContacts.filter(
        (contact) => contact.id !== contactId
      );
      saveContacts(newContacts);
      return newContacts;
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </>
  );
}
