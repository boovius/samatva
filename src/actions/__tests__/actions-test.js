import { doActivity } from '../'
import { DO_ACTIVITY } from '../../constants';


describe('doActivity', function() {
  const nowDate = Date.now();
  before(() => {
    sinon.stub(Date, 'now').returns(nowDate);
  });
  const activityId = 'activity-id';
  const time = nowDate;
  const action = doActivity(activityId, time)

  const expectedAction = {
    type: DO_ACTIVITY,
    activityId: activityId,
    time: time,
  };

  it('builds action', function() {
    expect(action).to.eql(expectedAction)
  });
});
