import { Title } from './Title/Title';
import { Stats } from './Stats/Stats';
import data from '../data.json';

export const Statistics = () => {
  return (
    <section>
      <Title title="Upload stats" />
      <Stats stats={data} />
    </section>
  );
};
