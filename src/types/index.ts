interface EventImage {
  url: string;
}

export interface ApiEvent {
  id: string;
  name: string;
  images: EventImage[];
  dates: {
    start: {
      localDate: string;
    };
  };
}
