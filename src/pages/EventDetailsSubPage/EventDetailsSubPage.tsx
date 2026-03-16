import { useEffect, useState } from "react";
import type { ApiEvent } from "../../types/index";
import { useParams } from "react-router";
import { getEventById } from "../../services/eventsApi";

export const EventDetailsSubPage = () => {
  const [event, setEvent] = useState<ApiEvent | null>(null);
  const { eventId } = useParams();

  useEffect(() => {
    getEventById(eventId as ApiEvent["id"]).then(setEvent);
  }, [eventId]);

  return (
    <>
      {event && (
        <>
          <p>{event.classifications[0].genre.name}</p>
        </>
      )}
    </>
  );
};
