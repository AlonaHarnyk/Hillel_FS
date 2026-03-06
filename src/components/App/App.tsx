import { useState, useEffect } from "react";
import { getContacts } from "../../services/contactsApi";
import type { Contact } from "../../types";
import { ContactsList } from "../ContactList/ContactList";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { SearchForm } from "../SearchForm/SearchForm";
import { useDebouncedCallback } from "use-debounce";

export const App = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState<null | Contact>(null);

  const [search, setSearch] = useState("");

  const onSearch = useDebouncedCallback((value) => setSearch(value), 1000);

  useEffect(() => {
    console.log(1, search);

    const fetchdata = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const newContacts = await getContacts(page, search);

        setIsBtnVisible(newContacts.length >= 10);

        if (page === 1) {
          setContacts(newContacts);
        } else {
          setContacts((prev) => [...prev, ...newContacts]);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchdata();
  }, [page, search]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const onModalOpen = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const onModalClose = () => {
    setSelectedContact(null);
  };

  return (
    <>
      {contacts.length > 0 && (
        <>
          <SearchForm defaultValue={search} onSearch={onSearch} />
          <ContactsList contacts={contacts} handleClick={onModalOpen} />
        </>
      )}
      {isLoading && <p>LOADING...</p>}
      {isError && <p>Opps! It's error!</p>}
      {!isLoading && isBtnVisible && (
        <Button
          textContent="Load more"
          type="button"
          onClickHandler={handleLoadMore}
        />
      )}
      {selectedContact && (
        <Modal onClose={onModalClose}>
          <h3>{selectedContact.name}</h3>
          <p>City: {selectedContact.city}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Pnone number: {selectedContact.number}</p>
          <p>Job: {selectedContact.job}</p>
          <p>{selectedContact.description}</p>
        </Modal>
      )}
    </>
  );
};
