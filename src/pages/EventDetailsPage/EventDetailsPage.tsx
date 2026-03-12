import { useParams } from "react-router";
import { getEventById } from "../../services/eventsApi";
import type { ApiEvent } from "../../types/index";
import { useEffect, useState } from "react";

export const EventDetailsPage = () => {
  const [event, setEvent] = useState<ApiEvent | null>(null);
  const { eventId } = useParams();

  useEffect(() => {
    getEventById(eventId as ApiEvent["id"]).then(setEvent);
  }, [eventId]);

  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img alt={event.name} src={event.images[0].url} width={300} />
          <p>Start date: {event.dates.start.localDate}</p>
        </>
      )}
    </>
  );
};
