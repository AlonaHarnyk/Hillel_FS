import axios from "axios";
import type { Contact } from "../types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

export const getContacts = async (page: number, search: string) => {
  const { data } = await axios.get<Contact[]>("/contacts", {
    params: {
      limit: 3,
      page,
      search,
    },
  });
  return data;
};

export const deleteContact = async (id: Contact["id"]) => {
  const { data } = await axios.delete<Contact>(`/contacts/${id}`);
  return data;
};

interface EditedData {
  email?: string;
  name?: string;
}

export const editContact = async ({
  id,
  editedData,
}: {
  id: Contact["id"];
  editedData: EditedData;
}) => {
  const { data } = await axios.put<Contact>(`/contacts/${id}`, editedData);
  return data;
};
