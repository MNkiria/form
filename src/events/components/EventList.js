import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import EventItem from './EventItem';
import './EventList.css';

const EventList = props => {
  if (props.items.length === 0) {
    return (
      <div className="event-list center">
        <Card>
          <h2>No Events found. Maybe create one?</h2>
          <button>Share Event</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="event-list">
      {props.items.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.imageUrl}
          title={event.title}
          description={event.description}
          address={event.address}
          creatorId={event.creator}
          coordinates={event.location}
        />
      ))}
    </ul>
  );
};

export default EventList;