import PropTypes from 'prop-types';
import css from './FriendList.module.css';
// import defaultImage from '../default.png';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ title, friends }) => {
  return (
    <section className={css.friendsContainer}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.friendlist}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  title: PropTypes.string,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
