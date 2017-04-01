import { ADD_MESSAGE } from '../../constants'
import { messagesRef } from '../../config/firebase'

const synker = store => next => action => {
  let result;

  if (action.type === ADD_MESSAGE) {
    result = next(action)

    console.log('pushing to db')
    messagesRef.push(action.message, () => {})
  } else {
    result = next(action)
  }
  return result
}

export default synker
