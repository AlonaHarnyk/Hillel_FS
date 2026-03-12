import { Route, Routes } from "react-router";
import { Layout } from "../Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { EventsPage } from "../../pages/EventsPage/EventsPage";
import { EventDetailsPage } from "../../pages/EventDetailsPage/EventDetailsPage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="events/:eventId" element={<EventDetailsPage />} />
      </Route>
    </Routes>
  );
};
