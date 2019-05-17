import * as types from '../constants/ActionTypes';

export function onAddFriend(friend) {
  return {
    type: types.ADD_FRIEND,
    friend,
  };
}

export function onDeleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id,
  };
}
