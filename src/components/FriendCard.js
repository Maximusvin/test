import { useParams, useLocation, useHistory } from 'react-router-dom';

const FriendCard = () => {
  const { friend } = useParams();
  const location = useLocation();
  const history = useHistory();

  const onGoBack = () => {
    history.push(location.state.from);
  };

  return (
    <div className="colorBox">
      <button type="button" onClick={onGoBack}>
        Back
      </button>
      <p>Карточка друга {`${friend}`}</p>
    </div>
  );
};

export default FriendCard;
