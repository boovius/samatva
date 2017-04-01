import jsdom from 'jsdom';
import sinon from 'sinon';

// setup the simplest document possible
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

// get the window object out of the document
let win = doc.defaultView;
win.location = {href: '', pathname: '/blah'};
Object.defineProperty(win.location, 'href', {
  writable: true,
  value: 'some url'
});
Object.defineProperty(win.location, 'pathname', {
  writable: true,
  value: 'some path'
});
Object.defineProperty(win.location, 'assign', {
  writable: false,
  value: sinon.stub()
});
// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;


// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win)

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  for (let key in window) {
    if (!window.hasOwnProperty(key)) continue;
    if (key in global) continue;

    global[key] = window[key];
  }
}
