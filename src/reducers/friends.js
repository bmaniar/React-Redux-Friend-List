import * as types from '../constants/ActionTypes';

const initialState = {
  friendsList: [],
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsList: [...state.friendsList, action.person],
      };
    default:
      return state;
  }
}
