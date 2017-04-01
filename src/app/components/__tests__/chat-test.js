import Chat from '../chat';
import Conversation from '../conversation';
import Composition from '../composition';

describe('Chat', ()=> {
  let chat;

  beforeEach(() => {
    chat = shallow(<Chat />);
  });

  describe('Layout', ()=> {
    it('has a conversation box', ()=> {
      const conversation = chat.find(Conversation);
      expect(conversation.length).to.eql(1);
    });

    it('has a composition box', ()=> {
      const composition = chat.find(Composition);
      expect(composition.length).to.eql(1);
    });
  });
});
