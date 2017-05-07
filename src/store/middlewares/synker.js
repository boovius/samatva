import { ADD_ACTIVITY } from '../../constants/'
import { usersRef } from '../../config/firebase'

const synker = store => next => action => {
  let result;

  if (action.type === ADD_ACTIVITY) {
    result = next(action)

    console.log('pushing to db')
    usersRef.push(action.activity, () => {})
  } else {
    result = next(action)
  }
  return result
}

export default synker
