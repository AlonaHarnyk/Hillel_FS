import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router";
import type { ApiEvent } from "../../types/index";
import { getEventsByName } from "../../services/eventsApi";

export const SearchPage = () => {
  const [events, setEvents] = useState<ApiEvent[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const eventName = searchParams.get("eventName");

  useEffect(() => {
    if (eventName === null || eventName === "") return;
    getEventsByName(eventName as string).then(setEvents);
  }, [eventName]);

  const handleSubmit = (formData: FormData) => {
    const search = formData.get("search") as string;
    if (search.trim() === "") return;
    setSearchParams({ eventName: search });
  };

  return (
    <>
      <form action={handleSubmit}>
        <input type="text" name="search" />
        <button>Search</button>
      </form>
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
