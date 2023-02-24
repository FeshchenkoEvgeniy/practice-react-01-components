import { User } from './User/User';
import { Stats } from './Stats/Stats';
import user from '../user.json';
import { Container } from './Profile.styled';
export const Profile = () => {
  return (
    <Container>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </Container>
  );
};
