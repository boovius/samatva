import { DO_ACTIVITY } from '../../../constants';
import deepFreeze from 'deep-freeze';
import doings from '../doings';

describe('doings reducer', () => {
  describe(DO_ACTIVITY, () => {
    const timeNow = Date.now();

    const stateBefore = [];

    const action = {
      type: DO_ACTIVITY,
      time: timeNow
    };

    const stateAfter = [
      {time: timeNow, sunk: false}
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('adds doing event to activity', () => {
      expect(doings(stateBefore, action)).to.eql(stateAfter);
    });
  });
});
