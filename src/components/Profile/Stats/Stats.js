import PropTypes from 'prop-types';
import { List, ListItem, TextSpan,BoldSpan} from './Stats.styled';


export const Stats = ({ stats: { followers, views, likes } }) => {
  return (
    <List>
      <ListItem>
        <TextSpan>Followers </TextSpan>
        <BoldSpan>{followers}</BoldSpan>
      </ListItem>
      <ListItem>
        <TextSpan>Views </TextSpan>
        <BoldSpan>{views}</BoldSpan>
      </ListItem>
      <ListItem>
        <TextSpan>Likes </TextSpan>
        <BoldSpan>{likes}</BoldSpan>
      </ListItem>
    </List>
  );
};

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
