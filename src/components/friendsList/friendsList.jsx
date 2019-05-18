import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
  root: {
    overflow: 'hidden',
  },
});
const FriendsList = ({
  onAddFriend, onDeleteFriend, onSelectFavourite, onDeselectFavourite, friendList, classes,
}) => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const onInputKeyPress = (event) => {
    const code = event.keyCode || event.which;
    if (name !== '' && code === 13) {
      onAddFriend({ name, sex, isFavourite: false });
      setName('');
    }
  };
  const sexChangeHandler = event => setSex(event.target.value);

  return (
    <Fragment>
      <TableRow className={classes.root}>
        <TableCell scope="row">
          <TextField
            id="standard-bare"
            value={name}
            margin="normal"
            onKeyPress={onInputKeyPress}
            onChange={event => setName(event.target.value)}
            fullWidth
          />
        </TableCell>
        <TableCell scope="row" align="right">
          <RadioGroup
            aria-label="Gender"
            name="gender"
            className={classes.group}
            onChange={sexChangeHandler}
            row
          >
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
          </RadioGroup>
        </TableCell>
      </TableRow>
      {
        friendList.map(friend => (
          <TableRow key={friend.id}>
            <TableCell scope="row">
              <Typography variant="h6">{friend.name}</Typography>
              {
                friend.sex !== ''
                  ? (
                    <Typography variant="body2">
                      {friend.sex}
                    </Typography>
                  ) : null
              }
            </TableCell>
            <TableCell align="right">
              {
                friend.isFavourite
                  ? (
                    <IconButton aria-label="Favourite" onClick={() => onDeselectFavourite(friend.id)}>
                      <StarIcon />
                    </IconButton>
                  ) : (
                    <IconButton aria-label="Favourite" onClick={() => onSelectFavourite(friend.id)}>
                      <StarBorderIcon />
                    </IconButton>
                  )
              }
              <IconButton aria-label="Delete" onClick={() => onDeleteFriend(friend.id)}>
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
  onSelectFavourite: PropTypes.func.isRequired,
  onDeselectFavourite: PropTypes.func.isRequired,
  friendList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string,
  })).isRequired,
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(FriendsList);
