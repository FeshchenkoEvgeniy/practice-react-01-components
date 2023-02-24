import PropTypes from 'prop-types';
import {ContainerCard, Image, TitleText, Text} from './User.styled'
export const User = ({ avatar, username, tag, location }) => {
  return (
    <ContainerCard>
      <Image src={avatar} alt={username}/>
      <TitleText>{username}</TitleText>
      <Text>{tag}</Text>
      <Text>{location}</Text>
    </ContainerCard>
  );
};

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
