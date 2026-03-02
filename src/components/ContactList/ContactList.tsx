import type { Contact } from "../../types";
import { Button } from "../Button/Button";

interface Props {
    contacts: Contact[];
    handleClick: (contact: Contact) => void
}

export const ContactsList = ({ contacts, handleClick }: Props) => {

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <Button
              textContent="View details"
              type="button"
              onClickHandler={() => handleClick(contact)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
