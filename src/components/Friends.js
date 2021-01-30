import { useState, useEffect } from 'react';
import './App.css';

const initialFriends = [
  { name: 'Максим Козлов', phone: '0979769625', job: 'ВОДКБ' },
  { name: 'Горай Виктория', phone: '0979677292', job: 'Пироговка' },
  { name: 'Орлов Игорь', phone: '0979769625', job: 'МКЛ1' },
  { name: 'Тимошков Максим', phone: '0979769699', job: 'МКЛ2' },
  { name: 'Амбарцумян Арсен', phone: '0979769625', job: 'МКЛ3' },
  { name: 'Головащенко Александр', phone: '0979769625', job: 'ВОДКБ' },
  { name: 'Голубева Ирина', phone: '0979769625', job: 'ВОДКБ' },
  { name: 'Гурская Светлана', phone: '097976452', job: 'ВОДКБ' },
  { name: 'Коробко Сергей', phone: '0979769644', job: 'МКЛ3' },
  { name: 'Рымарчук Виталий', phone: '0979769625', job: 'МКЛ3' },
  { name: 'Суркис Владимир', phone: '0979769625', job: 'МКЛ2' },
  { name: 'Омельченко Алексей', phone: '0979769621', job: 'МКЛ1' },
  { name: 'Данчук Ростислав', phone: '09797696288', job: 'ВОДКБ' },
  { name: 'Никифоров Виталий', phone: '0979769676', job: 'МКЛ1' },
];

const Friends = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(filter),
  );

  return (
    <div className="CounterBox">
      <div className="InputBox">
        <input
          type="text"
          placeholder="Фильтрация по имени"
          onChange={event => setFilter(event.target.value)}
          value={filter}
        />
        <input
          type="text"
          placeholder="Фильтрация по телефону"
          onChange={event => setFilter(event.target.value)}
          value={filter}
        />
        <input
          type="text"
          placeholder="Фильтрация по месту работы"
          onChange={event => setFilter(event.target.value)}
          value={filter}
        />
      </div>
      <ul>
        {visibleFriends.map((friend, index) => (
          <li key={index} className="FriendsBox">
            <div>{friend.name}</div>
            <div>{friend.phone}</div>
            <div>{friend.job}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
