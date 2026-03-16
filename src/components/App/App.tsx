import { Route, Routes } from "react-router";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { EventsPage } from "../../pages/EventsPage/EventsPage";
import { EventDetailsPage } from "../../pages/EventDetailsPage/EventDetailsPage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { EventDetailsSubPage } from "../../pages/EventDetailsSubPage/EventDetailsSubPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="events/:eventId/details" element={<EventDetailsPage />}>
          <Route path="genre" element={<EventDetailsSubPage />} />
        </Route>
        <Route path="search/:eventId/details" element={<EventDetailsPage />}>
          <Route path="genre" element={<EventDetailsSubPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
