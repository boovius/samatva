import { ADD_ACTIVITY, RECEIVE_ACTIVITIES } from '../../constants';

export default function (
  state = [],
  action
) {
  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      return Object.keys(action.data).map(key => Object.assign({}, action.data[key], {sunk: true}));
    case ADD_ACTIVITY:
      return [...state, Object.assign({}, action.activity, {sunk: false})];
    default:
      return state;
  }
};

