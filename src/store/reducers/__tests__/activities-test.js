import { RECEIVE_ACTIVITIES, ADD_ACTIVITY } from '../../../constants';
import deepFreeze from 'deep-freeze';
import activities from '../activities';

describe.only('activities reducer', () => {
  describe(RECEIVE_ACTIVITIES, () => {
    const stateBefore = [];
    const activityData = {
      'activity-1-uid': {
        title: 'activity-1'
      },
      'activity-2-uid': {
        title: 'activity-2'
      }
    }

    const action = {
      type: RECEIVE_ACTIVITIES,
      data: activityData
    };

    const stateAfter = [
      {
        title: 'activity-1',
        sunk: true
      },
      {
        title: 'activity-2',
        sunk: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('sets activities to data received', () => {
      expect(activities(stateBefore, action)).to.eql(stateAfter);
    });
  });

  describe(ADD_ACTIVITY, () => {
    const stateBefore = [
      {
        title: 'activity-1',
        sunk: true
      },
      {
        title: 'activity-2',
        sunk: true
      }
    ];

    const action = {
      type: ADD_ACTIVITY,
      activity: {title: 'new-activity'}
    };

    const stateAfter = [
      {
        title: 'activity-1',
        sunk: true
      },
      {
        title: 'activity-2',
        sunk: true
      },
      {
        title: 'new-activity',
        sunk: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('sets activities to data received', () => {
      expect(activities(stateBefore, action)).to.eql(stateAfter);
    });
  });
});
