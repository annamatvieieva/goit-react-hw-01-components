import PropTypes from 'prop-types';
import { ProfileStatistics } from './ProfileStatistics/ProfileStatistics';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { Box } from 'components/Box';
import { ProfileBox } from './Profile.styled';

export const Profile = ({ user }) => {
  const { username, tag, location, stats, avatar } = user;
  return (
    <ProfileBox>
      <ProfileInfo
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Box as="ul" display="flex">
        <ProfileStatistics text="Followers" stats={stats.followers} />
        <ProfileStatistics text="Views" stats={stats.views} />
        <ProfileStatistics text="Likes" stats={stats.likes} />
      </Box>
    </ProfileBox>
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
