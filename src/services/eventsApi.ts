import axios from "axios";
import type { ApiEvent } from "../types/index";

const api = axios.create({
  baseURL: "https://app.ticketmaster.com/discovery/v2",
  params: {
    apikey: "tIj1kC332ExvV8vs1uBAp1fasaO5ERpG",
  },
});

interface EventsResponse {
  _embedded: {
    events: ApiEvent[];
  };
}

export const getEvents = async () => {
  const { data } = await api.get<EventsResponse>("/events", {
    params: {
      size: 20,
    },
  });

  return data._embedded.events;
};

export const getEventById = async (id: ApiEvent["id"]) => {
  const { data } = await api.get<ApiEvent>(`/events/${id}`);
  return data;
};

export const getEventsByName = async (search: string) => {
  const { data } = await api.get<EventsResponse>("/events", {
    params: {
      size: 20,
      keyword: search,
    },
  });

  return data._embedded.events;
};
