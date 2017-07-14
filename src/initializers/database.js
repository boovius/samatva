import store from '../store';
import { receiveActivities } from '../actions';
import { usersRef } from '../config/firebase';

usersRef.on('value', ( snapshot ) => {
  console.log('getting snapshot', snapshot.val());
  if (!(snapshot.val() === null)) {
    store.dispatch(receiveActivities(snapshot.val()));
  } else {
    console.log('database empty');
  }
});

