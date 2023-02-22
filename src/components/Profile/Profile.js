import { User } from './User/User';
import { Stats } from './Stats/Stats';
import user from '../user.json';
export const Profile = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <Stats stats={user.stats} />
    </div>
  );
};
