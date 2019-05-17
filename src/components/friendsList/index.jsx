import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';
import common from '@material-ui/core/colors/common';
import FriendsList from './friendsList';
import * as FriendsActions from '../../actions';

const mapStateToProps = state => ({
  friendList: state.friendList,
});

const mapDispatchToProps = dispatch => bindActionCreators(FriendsActions, dispatch);

const styles = () => ({
  root: {
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)',
    overflow: 'hidden',
    maxWidth: 400,
  },
  header: {
    backgroundColor: grey[500],
    fontWeight: 700,
  },
  headingText: {
    color: common.white,
  },
});

const FriendsListComponent = ({
  onAddFriend, onDeleteFriend, onSelectFavourite, friendList, classes,
}) => {
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
    <Table className={classes.root}>
      <TableHead className={classes.header}>
        <TableRow>
          <TableCell colSpan={2}>
            <Typography variant="h6" className={classes.headingText}>The FriendList</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <FriendsList
          onAddFriend={onAddFriend}
          friendList={visibleFriendList}
          onDeleteFriend={onDeleteFriend}
          onSelectFavourite={onSelectFavourite}
        />
      </TableBody>
      {
        friendList.length > 2
          ? (
            <TableFooter>
              <TableRow>
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
              </TableRow>
            </TableFooter>
          ) : null
      }
    </Table>
  );
};

FriendsListComponent.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
  onDeleteFriend: PropTypes.func.isRequired,
  onSelectFavourite: PropTypes.func.isRequired,
  friendList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
  })).isRequired,
  classes: PropTypes.shape({}).isRequired,
};
const FriendsListComponentWithStyles = withStyles(styles)(FriendsListComponent);
export default connect(mapStateToProps, mapDispatchToProps)(FriendsListComponentWithStyles);
