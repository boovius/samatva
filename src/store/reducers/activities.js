import { ADD_ACTIVITY, RECEIVE_ACTIVITIES } from '../../constants';

export default function (
  state = {},
  action = {type: null}
) {
  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      const { data } = action;
      return Object.keys(data).reduce((state, uid) => {
        let activity = Object.assign(
          {}, data[uid], {sunk: true}
        )

        return Object.assign({}, state, {[uid]: activity});
      }, {}
    );
    case ADD_ACTIVITY:
      const count = Object.keys(state).length;
      const activity = Object.assign({}, action.activity, {sunk: false})
      return Object.assign({}, state, {[count + 1]: activity})
    default:
      return state;
  }
};

