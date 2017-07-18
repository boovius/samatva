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
  const { doings } = activity;
  if (typeof doings === 'undefined') {
    return 'none yet';
  }

  const now = new Date;

  return Object.keys(doings).reduce((sum, key) => {
    const doneTime = doings[key];
    if (hasBeenCreatedSinceStartOf(doneTime, now)) {
      return sum + 1;
    } else {
      return sum;
    }
  }, 0)
}

function hasBeenCreatedSinceStartOf(time, now) {
  const dayOfWeek = now.getDay();
  let startOfWeek = new Date(now.setDate(now.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6:1)));
  const startOfWeekTime = zeroOutTime(startOfWeek).valueOf();

  return time > startOfWeekTime;
}

function zeroOutTime(date) {
  return date.setHours(0) && date.setMinutes(0) && date.setSeconds(0) && date.setMilliseconds(0);
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
