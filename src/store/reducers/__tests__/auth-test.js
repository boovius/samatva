import { TOGGLE_AUTH } from '../../../constants';
import deepFreeze from 'deep-freeze';
import auth from '../auth';

describe('auth reducer', () => {
  describe(TOGGLE_AUTH, () => {
    context('from inAuthenticated to Authenticated', () => {
      const stateBefore = {
        isAuthenticated: false,
        user: {}
      }

      const user = {
        id: 'id',
        displayName: 'displayName',
        email: 'email'
      };

      const action = {
        type: TOGGLE_AUTH,
        user
      };

      const stateAfter = {
        isAuthenticated: true,
        user: {
          id: 'id',
          displayName: 'displayName',
          email: 'email'
        }
      };

      deepFreeze(stateBefore);
      deepFreeze(action);

      it('toggles isAuthenticated and adds user data', () => {
        expect(auth(stateBefore, action)).to.eql(stateAfter);
      });
    });

    context('from Authenticated to inAuthenticated', () => {
      const stateBefore = {
        isAuthenticated: true,
        user: {
          id: 'id',
          displayName: 'displayName',
          email: 'email'
        }
      };

      const action = {
        type: TOGGLE_AUTH,
        user: {}
      };

      const stateAfter = {
        isAuthenticated: false,
        user: {}
      }

      deepFreeze(stateBefore);
      deepFreeze(action);

      it('toggles isAuthenticated and sets empty user', () => {
        expect(auth(stateBefore, action)).to.eql(stateAfter);
      });
    });
  });
});
