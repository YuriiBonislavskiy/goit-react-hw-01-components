import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import defaultImage from '../default.png';

export const FriendList = ({title, friends }) => {
    return (
      <section className={css.friendsContainer}>
        <h2 className={css.title}>{title ? title : 'Friend List'}</h2>
        <ul className={css.friendlist}>
          {friends.map(({ avatar = defaultImage, name, isOnline, id }) => (
            <li
              className={css.item}
              //   style={{ background: getRandomHexColor() }}
              key={id}
            >
              <span
                className={css.status}
                style={{ background: isOnline && 'green' }}
              ></span>
              <img
                className={css.avatar}
                src={avatar ?? defaultImage}
                alt="User avatar"
                width="48"
              />
              <span className={css.name}>{name}</span>
            </li>
          ))}
        </ul>
      </section>
    );
};

FriendList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
