import {
  ADD_ACTIVITY,
  RECEIVE_ACTIVITIES,
  TOGGLE_AUTH,
  DO_ACTIVITY
} from '../constants';

export function addActivity(title) {
  return {
    type: ADD_ACTIVITY,
    activity: { title }
  }
}

export function receiveActivities(data) {
  return {
    type: RECEIVE_ACTIVITIES,
    data
  }
}

export function toggleAuth(user = {}) {
  return {
    type: TOGGLE_AUTH,
    user
  }
}

export function doActivity(activityId, time) {
  return {
    type: DO_ACTIVITY,
    activityId,
    time
  }
}
