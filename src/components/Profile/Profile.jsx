import PropTypes from 'prop-types';
import { ProfileStatistics } from './ProfileStatistics/ProfileStatistics';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';

export const Profile = ({ user }) => {
	const { username, tag, location, stats, avatar } = user;
  return (
    <div>
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ul>
        <ProfileStatistics text="Followers" stats={stats.followers} />
        <ProfileStatistics text="Views" stats={stats.views} />
        <ProfileStatistics text="Likes" stats={stats.likes} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};
