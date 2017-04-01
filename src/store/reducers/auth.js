import { TOGGLE_AUTH } from '../../constants';

export default function (
  state = {
    isAuthenticated: false,
    user: {}
  },
  action = {}
) {
  switch(action.type) {
    case TOGGLE_AUTH:
      return Object.assign(
        {},
        {
          isAuthenticated: !state.isAuthenticated,
          user: action.user
        }
      )
    default:
      return state;
  }
}

