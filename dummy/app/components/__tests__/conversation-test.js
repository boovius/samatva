import { Conversation } from '../conversation';
import Message from '../message';

describe('Converastion', ()=>{
  let conversation, messageData;

  beforeEach(()=>{
    messageData = [
      {
        text: 'message-1',
      },
      {
        text: 'message-2'
      }
    ];
    conversation = shallow(<Conversation messages={messageData}/>);
  });

  describe('Layout', ()=>{
    it('has a message for every message passed in', ()=>{
      const messages = conversation.find(Message);
      expect(messages.length).to.eql(messageData.length);
    });
  });
});
