import { api } from "./api";
import type { Contact } from "../types/contacts";

export const getContacts = async () => {
  const { data } = await api.get<Contact[]>("/contacts");
  return data;
};
