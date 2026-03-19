import { useEffect, useState } from "react";
import { getEvents } from "../../services/eventsApi";
import { type ApiEvent } from "../../types/index";
import { Link, useLocation } from "react-router";

export const EventsPage = () => {
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const location = useLocation();

  useEffect(() => {
    //getEvents().then((data) => setEvents(data));
    getEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={`${id}/details`} state={{ from: location }}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
