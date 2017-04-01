import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Message extends Component {
  _classes() {
    const { message, authored } = this.props
    const classes = { sunk: message.sunk, authored };

    return Object.keys(classes).reduce((classList, key) => {
      const classToAdd = classes[key] ? ` ${key}` : ` not-${key}`;
      return `${classList} ${classToAdd}`
    }, 'message');
  }

  _author() {
    return this.props.message.author.displayName;
  }

  render() {
    return(
      <div className='message-container'>
        <div className={this._classes()}>
          <span className='text'>{this.props.message.text}</span>
          <span> - </span>
          <span className='author'>{this._author()}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    authored: state.auth.user.uid === ownProps.message.author.uid
  }
}

export default connect(mapStateToProps)(Message);
