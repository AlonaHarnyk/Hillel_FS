import { useState } from "react";
import type { Contact } from "../../types";

interface Props {
  contact: Contact;
}

export const EditForm = ({ contact }: Props) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "name") {
      setName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    const editedContact = { name, email };
    console.log(editedContact);
  };

  return (
    <form action={handleSubmit}>
      <label>
        Name:
        <input name="name" value={name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input name="email" value={email} onChange={handleChange} />
      </label>
      <button>Save</button>
    </form>
  );
};
