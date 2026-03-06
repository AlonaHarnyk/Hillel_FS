import { useState } from "react";
import type { Contact } from "../../types";
import { Button } from "../Button/Button";
import {
  List,
  ContactName,
  StyledListItem,
  Status,
} from "./ContactList.styled";
import { EditForm } from "../EditForm/EditForm";

interface Props {
  contacts: Contact[];
  handleClick: (contact: Contact) => void;
}

export const ContactsList = ({ contacts, handleClick }: Props) => {
  const [contactToEdit, setContactToEdit] = useState<null | Contact>(null);

  return (
    <>
      <List>
        {contacts.map((contact) => (
          <StyledListItem key={contact.id}>
            <ContactName>{contact.name}</ContactName>
            <Status hasWork={contact.hasWork}>
              Has job: {contact.hasWork ? "Yes" : "No"}
            </Status>
            <p>Email: {contact.email}</p>
            <Button
              textContent="View details"
              type="button"
              onClickHandler={() => handleClick(contact)}
            />
            <Button
              textContent="Edit contact"
              type="button"
              onClickHandler={() => setContactToEdit(contact)}
            />
            {contactToEdit?.id === contact.id && (
              <EditForm contact={contactToEdit} />
            )}
          </StyledListItem>
        ))}
      </List>
    </>
  );
};
