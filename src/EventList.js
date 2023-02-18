import React, { useState } from "react";
import eventsData from "./eventsData.json";

function EventCard({ event }) {
  var imagePath  = require(`./images/${event.photoFilename}`);
  return (
    <div className="event-card">
      <img className="event-photo" src={imagePath } alt={event.title} />
      <div className="event-details">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p className="location">{event.location}</p>
      </div>
    </div>
  );
}

export default function EventList() {
  const [events, setEvents] = useState(eventsData);

  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
