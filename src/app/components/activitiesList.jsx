import React from 'react';
import { connect } from 'react-redux';
import ActivityAdder from './activityAdder';
import Activity from './activity';

export class ActivitiesList extends React.Component {
  _activities() {
    const { activities } = this.props;
    return (
      Object.keys(activities)
      .map(activityId => {
        let activity = Object.assign({}, activities[activityId], {id: activityId});
        return <Activity key={activityId} activity={activity}/>
      })
    )
  }

  render() {
    return(
      <div className='activities-list'>
        <ul>
          {this._activities()}
        </ul>
        <ActivityAdder />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activities: state.activities
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesList);
