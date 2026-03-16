import { useEffect, useState, useContext } from "react";
import { getEvents } from "../../services/eventsApi";
import { type ApiEvent } from "../../types/index";
import { Link, useLocation } from "react-router";
import { AuthContext } from "../../context/authContext";

export const EventsPage = () => {
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const location = useLocation();

  const data = useContext(AuthContext);

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
      <button onClick={() => data?.changeA(1000)}>Test click</button>
    </>
  );
};
