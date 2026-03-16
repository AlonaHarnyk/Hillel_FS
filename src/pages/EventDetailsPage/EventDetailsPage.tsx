import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { getEventById } from "../../services/eventsApi";
import type { ApiEvent } from "../../types/index";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";

export const EventDetailsPage = () => {
  const [event, setEvent] = useState<ApiEvent | null>(null);
  const { eventId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const data = useContext(AuthContext);
  console.log(data?.a);

  useEffect(() => {
    getEventById(eventId as ApiEvent["id"]).then(setEvent);
  }, [eventId]);

  const handleGoBack = () => {
    navigate(location?.state?.from ?? "/");
  };

  return (
    <>
      {event && (
        <>
          <button onClick={handleGoBack}>GO BACK</button>
          <h2>{event.name}</h2>
          <img alt={event.name} src={event.images[0].url} width={300} />
          <p>Start date: {event.dates.start.localDate}</p>
          <Link to="genre" state={location.state}>
            View genre
          </Link>
          <Outlet />
        </>
      )}
    </>
  );
};
