import { RECEIVE_ACTIVITIES, ADD_ACTIVITY, DO_ACTIVITY } from '../../constants';
import doings from './doings';

export default function (
  state = {},
  action = {type: null}
) {
  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      const { data } = action;
      return Object.keys(data).reduce((state, uid) => {
        const receivedActivity = Object.assign(
          {}, data[uid], {sunk: true}
        )

        return Object.assign({}, state, {[uid]: receivedActivity});
      }, {}
    );
    case ADD_ACTIVITY:
      const count = Object.keys(state).length;
      const newActivity = Object.assign({}, action.activity, {sunk: false});
      return Object.assign({}, state, {[count + 1]: newActivity});
    case DO_ACTIVITY:
      const doneActivityId = action.activityId;
      let doneActivity = Object.assign({}, state[doneActivityId]);
      doneActivity.doings = doings(doneActivity.doings, action);
      return Object.assign({}, state, {[doneActivityId]: doneActivity});
    default:
      return state;
  }
};

