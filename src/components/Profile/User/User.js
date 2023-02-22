import PropTypes from 'prop-types';

export const User = ({ avatar, username, tag, location }) => {
  return (
    <div>
      <img src={avatar} alt={username} width="200px" />
      <p>{username}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </div>
  );
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
