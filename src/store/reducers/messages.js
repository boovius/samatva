import { ADD_MESSAGE, RECEIVE_MESSAGES } from '../../constants';

export default function (
  state = [],
  action
) {
  switch(action.type) {
    case RECEIVE_MESSAGES:
      return Object.keys(action.data).map(key => Object.assign({}, action.data[key], {sunk: true}));
    case ADD_MESSAGE:
      return [...state, Object.assign({}, action.message, {sunk: false})];
    default:
      return state;
  }
};

