import PropTypes from 'prop-types';
import { TitleStatistics } from './Title.styled';

export const Title = ({ title }) => {
  return title && <TitleStatistics>{title}</TitleStatistics>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
