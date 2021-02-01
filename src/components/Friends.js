import { useState } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
  useLocation,
} from 'react-router-dom';
import initialFriends from '../DATA/Contacts.json';
import './App.css';

const Friends = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [filter, setFilter] = useState('');
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');
  const [filter4, setFilter4] = useState('');

  const location = useLocation();

  const { url } = useRouteMatch();

  const visibleFriends = friends.filter(
    friend =>
      friend.name.toLowerCase().includes(filter) &&
      friend.phone.toLowerCase().includes(filter1) &&
      friend.job.toLowerCase().includes(filter2) &&
      friend.specialization.toLowerCase().includes(filter3) &&
      friend.locality.toLowerCase().includes(filter4),
  );

  return (
    <div>
      <div className="InputBox">
        <input
          type="text"
          placeholder="Ф-ция по имени"
          onChange={event => setFilter(event.target.value)}
          value={filter}
          name="name"
        />
        <input
          type="text"
          placeholder="Ф-ция по телефону"
          onChange={event => setFilter1(event.target.value)}
          value={filter1}
          name="phone"
        />
        <input
          type="text"
          placeholder="Ф-ция по работе"
          onChange={event => setFilter2(event.target.value)}
          value={filter2}
          name="job"
        />
        <input
          type="text"
          placeholder="Ф-ция по специализации"
          onChange={event => setFilter3(event.target.value)}
          value={filter3}
          name="specialization"
        />
        <input
          type="text"
          placeholder="Ф-ция по городу"
          onChange={event => setFilter4(event.target.value)}
          value={filter4}
          name="locality"
        />
      </div>
      <ul>
        {visibleFriends.map(friend => (
          <li key={friend.id} className="FriendsBox">
            <Link
              to={{
                pathname: `${url}/${friend.id}`,
                state: { from: location },
              }}
              className="friendName"
            >
              {friend.name}
            </Link>
            <a href={`tel:${friend.phone}`} className="friend">
              {friend.phone}
            </a>
            <div className="friend">{friend.job}</div>
            <div className="friend">{friend.specialization}</div>
            <div className="friend">{friend.locality}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
