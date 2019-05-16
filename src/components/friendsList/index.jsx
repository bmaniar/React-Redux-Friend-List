import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FriendsList from './friendsList';
import * as FriendsActions from '../../actions';

const mapStateToProps = state => ({
  friendList: state.friendList,
});

const mapDispatchToProps = dispatch => ({
  onAddFriend: friend => dispatch(FriendsActions.addFriend(friend)),
  onDeleteFriend: id => dispatch(FriendsActions.deleteFriend(id)),
});
const FriendsListComponent = ({ onAddFriend, onDeleteFriend, friendList }) => (
  <FriendsList onAddFriend={onAddFriend} friendList={friendList} onDeleteFriend={onDeleteFriend} />
);

FriendsListComponent.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
  onDeleteFriend: PropTypes.func.isRequired,
  friendList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
  })).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListComponent);
