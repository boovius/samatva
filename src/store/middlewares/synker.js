import { ADD_ACTIVITY, DO_ACTIVITY } from '../../constants/'
import { usersRef } from '../../config/firebase'

const synker = store => next => action => {
  let result;

  console.log('pushing to firebase');

  if (action.type === ADD_ACTIVITY) {
    result = next(action)
    usersRef.push(action.activity, () => {})
  } else if (action.type === DO_ACTIVITY) {
    usersRef.child(action.activityId)
    .child('doings').push(action.time, () => {})
  } else {
    result = next(action)
  }
  return result
}

export default synker
