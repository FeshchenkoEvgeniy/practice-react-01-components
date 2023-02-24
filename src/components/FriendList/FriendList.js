import PropTypes from 'prop-types';
import { List, SpanIsOnline, ListItem } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <SpanIsOnline isActive={friend.isOnline}></SpanIsOnline>
          <img src={friend.avatar} alt={friend.name} width="48" />
          <p>{friend.name}</p>
        </ListItem>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
