import { Activity } from '../activity';

describe.only('Activity', ()=>{
  let doActivity, activity, activityData;

  //use following SO post to test doings in increment
  //https://stackoverflow.com/questions/31591098/how-do-i-stub-new-date-using-sinon

  beforeEach(()=>{
    doActivity = sinon.spy();

    activityData = {
      title: 'title',
      doings: {
        'doing-1':1500134006819,
        'doing-2':1500299863016,
        'doing-3':1500134008458,
      }
    }
    activity = shallow(<Activity doActivity={doActivity} activity={activityData} />);
  });

  describe('Layout', ()=>{
    it('has a doings count based on number since start of week', () => {
    });

    it('has a title', () => {
      expect(activity.find('.title').length).to.eql(1);
      expect(activity.find('.title').text()).to.eql(activityData.title);
    });

    it('has a do button', ()=>{
      expect(activity.find('.do').length).to.eql(1);
    });
  });

  describe('Interaction', ()=>{
    describe('doActivity', ()=>{
      beforeEach(() => {
        activity = mount(<Activity doActivity={doActivity} activity={activityData} />);
      });
      it('uses doActivity action prop',()=>{
        activity.find('.do').simulate('click');
        expect(doActivity.called).to.eql(true);
      });
    });
  });
});
