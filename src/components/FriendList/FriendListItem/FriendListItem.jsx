import PropTypes from 'prop-types';
import {Chip, ListElement} from './FriendListItem.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListElement>
      <Chip isOnline={isOnline}></Chip>
      <img src={avatar} alt="User avatar"/>
      <p>{name}</p>
    </ListElement>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
