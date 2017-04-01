import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

export class Conversation extends Component {
  _renderMessages() {
    return this.props.messages.map((message, i) => {
      return(
        <Message
          key={i}
          message={message}
          />
      )
    });
  }

  render() {
    return(
      <div className='conversation'>
        {this._renderMessages()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Conversation);
