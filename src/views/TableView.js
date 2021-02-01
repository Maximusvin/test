import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import SortSelector from '../components/SortSelector/SortSelector';

const initialState = [
  { id: 1, value: 100 },
  { id: 2, value: 200 },
  { id: 3, value: 300 },
  { id: 4, value: 400 },
  { id: 5, value: 500 },
];

const sortOption = [
  {
    value: 'ascending',
    label: 'По возрастанию',
  },
  {
    value: 'descending',
    label: 'По убыванию',
  },
];

const TableView = () => {
  const [expenses, setExpenses] = useState(initialState);
  const history = useHistory();
  const location = useLocation();

  const searchOrder =
    new URLSearchParams(location.search).get('sortBy') ?? 'ascending';

  const onSortOrderChange = order => {
    history.push({
      ...location,
      search: `sortBy=${order}`,
    });
  };

  useEffect(() => {
    if (location.search !== '') {
      return;
    }

    history.push({
      ...location,
      search: `sortBy=ascending`,
    });
  }, [history, location]);

  return (
    <div className="colorBox">
      <h2>Селектор</h2>
      <SortSelector
        options={sortOption}
        onChange={onSortOrderChange}
        value={searchOrder}
      />
    </div>
  );
};

export default TableView;
