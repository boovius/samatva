import { DO_ACTIVITY } from '../../constants';

export default function (
  state = [],
  action
) {
  switch(action.type) {
    case DO_ACTIVITY:
      return [...state, {time: action.time, sunk: false}]
    default:
      return state;
  }
}
