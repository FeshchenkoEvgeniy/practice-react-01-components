import PropTypes from 'prop-types';
import { List, ListItem } from './Stats.styled';

export const Stats = ({ stats }) => {
  return (
    <List>
      {stats.map(stat => (
        <ListItem key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
          <span>{stat.label} </span>
          <span>{stat.percentage}%</span>
        </ListItem>
      ))}
    </List>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
