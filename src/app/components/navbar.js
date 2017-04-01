import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { toggleAuth } from '../../actions';

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {open: false};
    this._toggleMenu = this._toggleMenu.bind(this);
    this._logout = this._logout.bind(this);
    this._menu = this._menu.bind(this);
  }

  _toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  _displayDropdown() {
    return this.state.open ? 'block' : 'none';
  }

  _logout() {
    this.props.logout();
    this.context.router.push('login');
  }

  _menu() {
    if (this.props.isAuthenticated) {
      return (
        <div onClick={this._toggleMenu} className='dropdown'>
          <div className='dropdown-title'><a>{this.props.menuTitle}</a></div>
          <ul style={{display: this._displayDropdown()}} className='dropdown-content'>
            <li className='link'><Link to='/'>Chat</Link></li>
            <hr/>
            <li className='link'><a onClick={this._logout}>Logout</a></li>
          </ul>
        </div>
      )
    }
  }

  render () {
    return (
      <div id='navbar'>
        <div className='home'>
          <Link to='/'>Home</Link>
        </div>
        {this._menu()}
      </div>
    )
  }
}

Navbar.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    menuTitle: state.auth.isAuthenticated ? state.auth.user.displayName : 'Menu'
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => { dispatch(toggleAuth()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

