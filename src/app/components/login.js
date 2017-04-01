import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { auth, facebookAuthProvider } from '../../config/firebase';
import { toggleAuth } from '../../actions';

export class Login extends Component {
  constructor() {
    super();
    this.signin = this.signin.bind(this);
  }

  signin(e) {
    e.preventDefault();

    auth.signInWithPopup(facebookAuthProvider).then((authResult) => {
      const user = {
        uid: authResult.user.uid,
        displayName: authResult.user.displayName,
        email: authResult.user.email,
      }
      this.props.addAuth(user);
      this.context.router.push('/');
    }).catch((error) => {
      console.log('auth error', error);
    });
  }

  render() {
    return (
      <div id='logins'>
        <a href='#' onClick={this.signin}>
          login with facebook
        </a>
      </div>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addAuth: (user) => { dispatch(toggleAuth(user)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
