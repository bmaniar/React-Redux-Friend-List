import React from 'react';
import { connect } from 'react-redux';
import FriendsList from './friendsList';

const mapStateToProps = state => ({
  friendlist: state.friendlist,
});

const FriendsListComponent = () => <FriendsList />;
export default connect(mapStateToProps)(FriendsListComponent);
