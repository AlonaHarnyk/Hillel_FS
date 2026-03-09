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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteContact } from "../../services/contactsApi";

interface Props {
  contacts: Contact[];
  handleClick: (contact: Contact) => void;
}

export const ContactsList = ({ contacts, handleClick }: Props) => {
  const [contactToEdit, setContactToEdit] = useState<null | Contact>(null);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteContact,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  const handleDelete = (id: Contact["id"]) => {
    mutate(id);
  };


  const closeEditForm = () => {
    setContactToEdit(null)
  }

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
              textContent="Delete"
              type="button"
              onClickHandler={() => handleDelete(contact.id)}
            />
            <Button
              textContent="Edit contact"
              type="button"
              onClickHandler={() => setContactToEdit(contact)}
            />
            {contactToEdit?.id === contact.id && (
              <EditForm contact={contactToEdit} onClose={closeEditForm} />
            )}
          </StyledListItem>
        ))}
      </List>
    </>
  );
};
