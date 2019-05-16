import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    maxWidth: 360,
    padding: `0 ${theme.spacing.unit * 3}px`,
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
    <List className={classes.root}>
      <ListItem>
        <TextField
          id="standard-bare"
          className={classes.inputField}
          value={name}
          margin="normal"
          onKeyPress={onInputKeyPress}
          onChange={event => setName(event.target.value)}
          fullWidth
        />
      </ListItem>
      {
        friendList.map(friend => (
          <ListItem key={friend.id}>
            <ListItemText primary={friend.name} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments" onClick={() => deleteClickHandler(friend.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }
    </List>
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
