import { RECEIVE_ACTIVITIES, ADD_ACTIVITY } from '../../../constants';
import deepFreeze from 'deep-freeze';
import activities from '../activities';

describe('activities reducer', () => {
  describe(RECEIVE_ACTIVITIES, () => {
    const stateBefore = {};
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

    const stateAfter = {
      'activity-1-uid': {
        title: 'activity-1',
        sunk: true
      },
      'activity-2-uid': {
        title: 'activity-2',
        sunk: true
      }
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('sets activities to data received', () => {
      expect(activities(stateBefore, action)).to.eql(stateAfter);
    });
  });

  describe(ADD_ACTIVITY, () => {
    const stateBefore = {
      'activity-1-uid': {
        title: 'activity-1',
        sunk: true
      },
      'activity-2-uid': {
        title: 'activity-2',
        sunk: true
      }
    };

    const action = {
      type: ADD_ACTIVITY,
      activity: {title: 'new-activity'}
    };

    const stateAfter = {
      'activity-1-uid': {
        title: 'activity-1',
        sunk: true
      },
      'activity-2-uid': {
        title: 'activity-2',
        sunk: true
      },
      3: {
        title: 'new-activity',
        sunk: false
      }
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('adds new activity to state with unique key based on state length', () => {
      expect(activities(stateBefore, action)).to.eql(stateAfter);
    });
  });

  describe('default', () => {
    it('is an empty object', () => {
      expect(activities()).to.eql({});
    });
  });
});
