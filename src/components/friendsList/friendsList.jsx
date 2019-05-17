import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
  root: {
    overflow: 'hidden',
  },
});
const FriendsList = ({
  onAddFriend, onDeleteFriend, friendList, classes,
}) => {
  const [name, setName] = useState('');

  const onInputKeyPress = (event) => {
    const code = event.keyCode || event.which;
    if (name !== '' && code === 13) {
      onAddFriend({ name, gender: '', isFavourite: false });
      setName('');
    }
  };
  const deleteClickHandler = id => onDeleteFriend(id);
  return (
    <Fragment>
      <TableRow className={classes.root}>
        <TableCell scope="row">
          <TextField
            id="standard-bare"
            className={classes.inputField}
            value={name}
            margin="normal"
            onKeyPress={onInputKeyPress}
            onChange={event => setName(event.target.value)}
            fullWidth
          />
        </TableCell>
      </TableRow>
      {
        friendList.map(friend => (
          <TableRow key={friend.id}>
            <TableCell scope="row">
              {friend.name}
            </TableCell>
            <TableCell>
              <IconButton aria-label="Comments" onClick={() => deleteClickHandler(friend.id)}>
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))
      }
    </Fragment>
  );
};

FriendsList.propTypes = {
  onAddFriend: PropTypes.func.isRequired,
  onDeleteFriend: PropTypes.func.isRequired,
  friendList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
  })).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(FriendsList);
