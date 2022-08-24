import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {ProfileAvatar, ProfileDescription, ProfileName} from './ProfileInfo.styled'

export const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <Box py={5} px={4} display='flex'  alignItems='center' justifyContent='center' flexDirection='column'>
      <ProfileAvatar src={avatar} alt="User avatar" />
      <ProfileName>{username}</ProfileName>
      <ProfileDescription>{`@${tag}`}</ProfileDescription>
      <ProfileDescription>{location}</ProfileDescription>
    </Box>
  );
};

ProfileInfo.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
