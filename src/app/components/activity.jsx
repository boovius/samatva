import React from 'react';
import { connect } from 'react-redux';
import { doActivity } from '../../actions';

export class Activity extends React.Component {
  render() {
    const { activity } = this.props;
    return (
      <div className='activity'>
        <div className='title'>{activity.title}</div>
        <div className='doingsCount'>{doingsCount(activity)}</div>
        <div className='do' onClick={this.props.doActivity}>+</div>
      </div>
    )
  }
}

function doingsCount(activity) {
  if (typeof activity.doings != 'undefined') {
    return activity.doings.length;
  } else {
    return 0;
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  const { activity } = ownProps;
  return {
    doActivity: () => { dispatch(doActivity(activity.id, Date.now())) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
