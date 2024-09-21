import React from 'react';
import { useParams } from 'react-router-dom';

import EventList from '../components/EventList';

const DUMMY_EVENTS = [
  {
    id: 'p1',
    title: 'My House',
    description: 'Kuna Form',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, Juja, Kiambu 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'My House',
    description: 'Niko na form',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W Juja, Kiambu 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UserEvents = () => {
    const userId = useParams().userId;
    const LoadedEvents = DUMMY_EVENTS.filter(event => event.creator === userId);

  return <EventList items={LoadedEvents} />;
};

export default UserEvents;