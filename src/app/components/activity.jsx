import React from 'react';
import { connect } from 'react-redux';

export class Activity extends React.Component {
  render() {
    return (
      <div className='activity'>
        <div className='title'>{this.props.title}</div>
        <div className='do'>+</div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps() {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
