import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Box } from 'components/Box';

export const FriendList = ({ friends }) => {
  return (
    <Box as='ul' maxWidth='200px' mx='auto'  mb={5} >
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </Box>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
