import * as types from '../constants/ActionTypes';

const initialState = {
  friendList: [],
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendList: [...state.friendList, {
          id: state.friendList.length + 1,
          ...action.friend,
        },
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendList: state.friendList.filter(friend => friend.id !== action.id),
      };
    default:
      return state;
  }
}
