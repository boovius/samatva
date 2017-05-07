import {
  ADD_ACTIVITY,
  RECEIVE_ACTIVITIES,
  TOGGLE_AUTH
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
