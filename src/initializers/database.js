import store from '../store';
import { receiveMessages } from '../actions';
import { messagesRef } from '../config/firebase';

messagesRef.on('value', ( snapshot ) => {
  console.log('getting snapshot', snapshot.val());
  if (!(snapshot.val() === null)) {
    store.dispatch(receiveMessages(snapshot.val()));
  } else {
    console.log('database empty');
  }
});

