import ConnectedMessage, { Message } from '../message';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('Message', ()=>{
  let component, messageProp;

  beforeEach(()=>{
    messageProp = {
      text: 'text',
      sunk: true,
      author: {
        uid: 'author-uid',
        displayName: 'author-displayName'
      }
    };
    component = mount(
      <Message
        authored={true}
        message={messageProp}
        />
    );
  });

  describe('Layout', ()=>{
    it('has text of its text', ()=> {
      expect(component.find('.text').text()).to.eql(messageProp.text);
    });

    it('has author name', ()=> {
      expect(component.find('.author').text()).to.eql(messageProp.author.displayName);
    });

    context('when message authored', ()=>{
      it('has authored class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('authored')).to.eql(true);
      });
    });

    context('when message not authored', ()=>{
      beforeEach(()=>{
        component = mount(
          <Message
            authored={false}
            message={messageProp}
            />
        );
      });

      it('has received class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('not-authored')).to.eql(true);
      });
    });

    context('when message is sunk', () => {
      it('has sunk class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('sunk')).to.eql(true);
      });
    });

    context('when message not sunk', ()=>{
      beforeEach(()=>{
        messageProp = {
          text: 'text',
          sunk: false,
          author: {
            uid: 'author-uid',
            displayName: 'author-displayName'
          }
        };
        component = mount(
          <Message
            authored={false}
            message={messageProp}
            />
        );
      });

      it('has unsunk class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('not-sunk')).to.eql(true);
      });
    });
  });
});

describe('ConnectedMessage', () => {
  let messageComponent, messages, store;

  beforeEach(() => {
    messages = [
      {
        author: {
          uid: 'uid',
          displayName: 'author name'
        },
        text: 'text'
      },
      {
        author: {
          uid: 'different-uid',
          displayName: 'a different author name'
        },
        text: 'some-different-text'
      },
    ]
    const state = {
      auth: {
        user: {
          uid: 'uid'
        }
      },
      messages
    }

    store = configureStore()(state);
  });

  context('when message author.uid matches auth', () => {
    beforeEach(() => {
      const connectedMessage = mount(
        <Provider store={store}>
          <ConnectedMessage message={messages[0]} />
        </Provider>
      )

      messageComponent = connectedMessage.find(Message);
    });

    it('passes calculateds authored and passes along', () => {
      expect(messageComponent.prop('authored')).to.eql(true);
    });
  });

  context('when message author.uid does not match auth', () => {
    beforeEach(() => {
      const connectedMessage = mount(
        <Provider store={store}>
          <ConnectedMessage message={messages[1]} />
        </Provider>
      )

      messageComponent = connectedMessage.find(Message);
    });

    it('passes calculateds authored and passes along', () => {
      expect(messageComponent.prop('authored')).to.eql(false);
    });
  });
});
