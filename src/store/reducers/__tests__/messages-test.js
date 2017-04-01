import { RECEIVE_MESSAGES, ADD_MESSAGE } from '../../../constants';
import deepFreeze from 'deep-freeze';
import messages from '../messages';

describe('messages reducer', () => {
  describe(RECEIVE_MESSAGES, () => {
    const stateBefore = [];
    const messageData = {
      'message-1-uid': {
        author: {
          name: 'name-1',
          uid: 'author-1-uid',
        },
        text: 'message-1'
      },
      'message-2-uid': {
        author: {
          name: 'name-2',
          uid: 'author-2-uid',
        },
        text: 'message-2'
      }
    }

    const action = {
      type: RECEIVE_MESSAGES,
      data: messageData
    };

    const stateAfter = [
      {
        author: {
          name: 'name-1',
          uid: 'author-1-uid',
        },
        text: 'message-1',
        sunk: true
      },
      {
        author: {
          name: 'name-2',
          uid: 'author-2-uid',
        },
        text: 'message-2',
        sunk: true
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('sets messages to data received', () => {
      expect(messages(stateBefore, action)).to.eql(stateAfter);
    });
  });

  describe(ADD_MESSAGE, () => {
    const stateBefore = [
      {
        author: {
          name: 'name-1',
          uid: 'author-1-uid',
        },
        text: 'message-1',
        sunk: true
      },
      {
        author: {
          name: 'name-2',
          uid: 'author-2-uid',
        },
        text: 'message-2',
        sunk: true
      }
    ];

    const action = {
      type: ADD_MESSAGE,
      message: {text: 'new-message'}
    };

    const stateAfter = [
      {
        author: {
          name: 'name-1',
          uid: 'author-1-uid',
        },
        text: 'message-1',
        sunk: true
      },
      {
        author: {
          name: 'name-2',
          uid: 'author-2-uid',
        },
        text: 'message-2',
        sunk: true
      },
      {
        text: 'new-message',
        sunk: false
      }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('sets messages to data received', () => {
      expect(messages(stateBefore, action)).to.eql(stateAfter);
    });
  });
});
