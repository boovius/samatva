import chai from 'chai';
import chaiEnzyme from 'chai-enzyme'
import chaiStats from 'chai-stats'
import React from 'react';
import {mount, shallow} from 'enzyme';
import sinon from 'sinon';

chai.use(chaiEnzyme());
chai.use(chaiStats);

global.expect = chai.expect;
global.assert = chai.assert;
global.React = React;
global.mount = mount;
global.sinon = sinon;
global.shallow = shallow;
