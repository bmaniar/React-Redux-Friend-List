import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import FriendsList from './friendsList';
import * as FriendsActions from '../../actions';

const mapStateToProps = state => ({
  friendList: state.friendList,
});

const mapDispatchToProps = dispatch => ({
  onAddFriend: friend => dispatch(FriendsActions.addFriend(friend)),
  onDeleteFriend: id => dispatch(FriendsActions.deleteFriend(id)),
});
const FriendsListComponent = ({ onAddFriend, onDeleteFriend, friendList }) => {
  const [page, setPage] = useState(0);
  const visibleFriendList = friendList.slice(page * 2, page * 2 + 2);
  const handleChangePage = () => {
  };
  const loadPreviousPage = () => {
    setPage(page - 1);
  };
  const loadNextPage = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <FriendsList
        onAddFriend={onAddFriend}
        friendList={visibleFriendList}
        onDeleteFriend={onDeleteFriend}
      />
      <TablePagination
        count={friendList.length}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
          onClick: loadPreviousPage,
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
          onClick: loadNextPage,
        }}
        rowsPerPage={2}
        rowsPerPageOptions={[]}
        page={page}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

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
