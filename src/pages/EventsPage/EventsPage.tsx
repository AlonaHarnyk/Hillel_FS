import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventsApi";
import { type ApiEvent } from "../../types/index";
import { Link } from "react-router";

export const EventsPage = () => {
  const [events, setEvents] = useState<ApiEvent[]>([]);

  useEffect(() => {
    //getEvents().then((data) => setEvents(data));
    getEvents().then(setEvents);
  }, []);

  return (
    <ul>
      {events.map(({ name, id }) => (
        <li key={id}><Link to={id}>{name}</Link></li>
      ))}
    </ul>
  );
};
