import { useState} from "react";
import { getContacts } from "../../services/contactsApi";
import type { Contact } from "../../types";
import { ContactsList } from "../ContactList/ContactList";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { SearchForm } from "../SearchForm/SearchForm";
import { useDebouncedCallback } from "use-debounce";
import { useQuery } from "@tanstack/react-query";

export const App = () => {
  const [page, setPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState<null | Contact>(null);

  const [search, setSearch] = useState("");

  const onSearch = useDebouncedCallback((value) => {
    setSearch(value);
    setPage(1);
  }, 1000);

  const {
    data: contacts,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["contacts", page, search],
    queryFn: () => getContacts(page, search),
    retry: 1,
  });

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
      {contacts && contacts.length > 0 && (
        <>
          <SearchForm defaultValue={search} onSearch={onSearch} />
          <ContactsList contacts={contacts} handleClick={onModalOpen} />
        </>
      )}
      {isLoading && <p>LOADING...</p>}
      {isError && <p>Opps! It's error!</p>}
      {!isLoading && contacts && contacts.length === 3 && (
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
