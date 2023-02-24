import { Title } from './Title/Title';
import { Stats } from './Stats/Stats';
import data from '../data.json';
import { Section } from './Statistics.styled';

export const Statistics = () => {
  return (
    <Section>
      <Title title="Upload stats" />
      <Stats stats={data} />
    </Section>
  );
};
