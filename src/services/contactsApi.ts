import axios from "axios";
import type { Contact } from "../types";

axios.defaults.baseURL = "https://6240d2109b450ae274385b44.mockapi.io/api";

export const getContacts = async (page: number, search: string) => {
  const { data } = await axios.get<Contact[]>("/contacts", {
    params: {
      limit: 10,
      page,
      search,
    },
  });
  return data;
};
