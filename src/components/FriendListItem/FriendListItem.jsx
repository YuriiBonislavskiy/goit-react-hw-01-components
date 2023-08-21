import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import defaultImage from '../default.png';

export const FriendListItem = friend => {
  const { id, avatar, name, isOnline } = friend;
  return (
    <li className={css.item} key={id}>
      <span
        className={`${css.status} ${isOnline ? css.isOnline : ""}`}
      ></span>
      <img
        className={css.avatar}
        src={avatar ?? defaultImage}
        alt="User avatar"
        width="48"
      />
      <span className={css.name}>{name}</span>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
