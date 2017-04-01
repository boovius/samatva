import React from 'react';
import Conversation from './conversation';
import Composition from './composition';

export default class Chat extends React.Component {
  render(){
    return (
      <div className='chat'>
        <Conversation  />
        <Composition />
      </div>
    )
  }
}
