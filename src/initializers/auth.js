import store from '../store';
import { RECEIVE_USER } from '../constants';
import { auth, facebookAuthProvider } from '../config/firebase';

auth.signInWithPopup(facebookAuthProvider).then(
(authResult) => {
  const { uid, displayName, email } = authResult.user;
  store.dispatch({
    type: RECEIVE_USER,
    user: {
      uid,
      displayName,
      email
    }
  })
}).catch(error => {
  console.log('auth error', error);
});

