import React from 'react';
import { connect } from 'react-redux';
import ActivityAdder from './activityAdder';

export class ActivitiesList extends React.Component {
  _activities() {
    return this.props.activities.map(a => <li>{a.title}</li>)
  }

  render() {
    return(
      <div className='list'>
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
